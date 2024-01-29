
"use strict";

let IsInRemoteControl = require('./IsInRemoteControl.js')
let AddToLog = require('./AddToLog.js')
let GetLoadedProgram = require('./GetLoadedProgram.js')
let GetRobotMode = require('./GetRobotMode.js')
let GetSafetyMode = require('./GetSafetyMode.js')
let RawRequest = require('./RawRequest.js')
let Load = require('./Load.js')
let GetProgramState = require('./GetProgramState.js')
let IsProgramRunning = require('./IsProgramRunning.js')
let Popup = require('./Popup.js')
let IsProgramSaved = require('./IsProgramSaved.js')

module.exports = {
  IsInRemoteControl: IsInRemoteControl,
  AddToLog: AddToLog,
  GetLoadedProgram: GetLoadedProgram,
  GetRobotMode: GetRobotMode,
  GetSafetyMode: GetSafetyMode,
  RawRequest: RawRequest,
  Load: Load,
  GetProgramState: GetProgramState,
  IsProgramRunning: IsProgramRunning,
  Popup: Popup,
  IsProgramSaved: IsProgramSaved,
};
