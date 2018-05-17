#!/bin/sh
gnome-terminal  -x bash -c "testrpc; bash"
gnome-terminal  -x bash -c "truffle compile && truffle migrate && truffle console; bash"
gnome-terminal  -x bash -c "npm start; bash"