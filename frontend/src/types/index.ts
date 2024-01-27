export type TTheme = 'light' | 'dark';

export type TGenericObject = {
  [key: string]: any;
};

export type TGenericFunction = (...args: any[]) => any;

export enum Modal {
  PROCESS_PICKER = 'PROCESS_PICKER',
  SETTINGS = 'SETTINGS',
  ACTION_CONFIRMATION = 'ACTION_CONFIRMATION'
}

export enum LoadingStatus {
  IDLE = 'IDLE',
  INSTALLING_STEAMCMD = 'INSTALLING_STEAMCMD',
  INSTALLING_SERVER = 'INSTALLING_SERVER',
  DONE = 'DONE'
}

export enum ServerStatus {
  STARTED = 'STARTED',
  STOPPED = 'STOPPED',
  STARTING = 'STARTING',
  STOPPING = 'STOPPING',
  RESTARTING = 'RESTARTING',
  ERROR = 'ERROR'
}

export enum ConsoleId {
  STEAM_CMD = 'STEAM_CMD',
  SERVER = 'DEDICATED_SERVER'
}

export enum AppEvent {
  SET_LOADING_STATUS = 'SET_LOADING_STATUS',
  SET_SERVER_STATUS = 'SET_SERVER_STATUS',
  ADD_CONSOLE_ENTRY = 'ADD_CONSOLE_ENTRY'
}

export type TConsoleEntry = {
  timestamp: number;
  message: string;
  msgType: 'stdout' | 'stderr';
};
