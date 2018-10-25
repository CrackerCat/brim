/* @flow */

import {connect} from "react-redux"
import DebugModal from "../components/DebugModal"
import * as searchBar from "../reducers/searchBar"

const stateToProps = state => ({
  searchProgram: searchBar.getSearchProgram(state)
})

export default connect(stateToProps)(DebugModal)