/* @flow */

import {useSelector} from "react-redux"
import React, {useEffect} from "react"

import {ipcRenderer} from "electron"

import {XLatestError} from "./LatestError"
import AboutModal from "./AboutModal"
import ClusterGate from "./Login/ClusterGate"
import ErrorNotice from "./ErrorNotice"
import HTMLContextMenu from "./HTMLContextMenu"
import Preferences from "./Preferences/Preferences"
import Prefs from "../state/Prefs"
import SpaceModal from "./SpaceModal"
import View from "../state/View"
import brim from "../brim"

export default function App() {
  brim.time.setZone(useSelector(View.getTimeZone))
  brim.time.setDefaultFormat(useSelector(Prefs.getTimeFormat))

  useEffect(() => {
    ipcRenderer.invoke("windows:ready")
  }, [])

  return (
    <div className="app-wrapper">
      <div className="title-bar-drag-area" />
      <XLatestError />
      <ClusterGate />

      {/* Global Modals */}
      <ErrorNotice />
      <Preferences />
      <AboutModal />
      <SpaceModal />
      <HTMLContextMenu />
    </div>
  )
}
