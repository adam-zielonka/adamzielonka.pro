import { sleep } from '../utils'
import { START_COMMANDS } from './constants'
import { clearLines, processCommandLine, processLine } from './lines'
import { cd } from './path'
import { store } from './store'

function system(sysCommand: string, args: string[]): string[] {
  switch (sysCommand) {
    case 'clear':
      clearLines()
      return []
    case 'shutdown':
      store.state.setShutdown()
      return []
    case 'freeze':
      store.state.setFreeze()
      return []
    case 'echo':
      return [args.join(' ')]
    case 'font':
      return store.font.set(args.length ? args.join(' ') : '')
    case 'cd':
      cd(args.length ? args.join(' ') : '')
      return []
    case 'help':
      return store.commands.helpLines
    default:
      return []
  }
}

function parseArgs(commandArgs: string): string[] {
  return [...commandArgs.matchAll(/["']([^"']*)["']| ?([^"' ]+) ?/g)]
    .map(m => m[1] || m[2])
    .filter(c => !!c)
}

export class Style {
  color = ''
  fontWeight = ''
  fontSize = ''
}

async function process(commandArgs: string): Promise<void> {
  const [command, ...args] = parseArgs(commandArgs)
  if (!command) {
    return
  }

  const style: Style = new Style()

  for (const line of store.commands.getLines(command)) {
    let animate = false
    let hide = false

    for (const action of line.actions) {
      switch (action.namespace) {
        case 'sleep':
          await sleep(+action.action)
          continue
        case 'system':
          for (const systemLine of system(action.action, args)) {
            await processLine({ value: systemLine, style })
          }
          continue
        case 'ui':
          if (action.action === 'color') {
            style.color = action.value
          } else if (action.action === 'font-weight') {
            style.fontWeight = action.value
          } else if (action.action === 'font-size') {
            style.fontSize = action.value
          } else if (action.action === 'animate') {
            animate = true
          } else if (action.action === 'hide') {
            hide = true
          }
          continue
      }
    }

    !hide && (await processLine({ value: line.value, style }, animate))
  }
}

export async function addCommand(command: string): Promise<void> {
  store.state.startProcessing()
  await processCommandLine(command)
  await process(command)
  store.state.stopProcessing()
}

export async function start(): Promise<void> {
  store.state.startProcessing()
  for (const command of START_COMMANDS) {
    await processCommandLine(command, true)
    await process(command)
  }
  store.state.stopProcessing()
}
