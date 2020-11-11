```
[2020-11-11T18:05:04.248] [INFO] From service weather - Weather : Listening on port 3001
[2020-11-11T18:05:04.509] [INFO] From service missions-coordinator - Missions coordinator : Listening on port 3008
[2020-11-11T18:05:04.547] [INFO] From service telemetry-analyser-service - Telemetry Analyser : Listening on port 3009
[2020-11-11T18:05:04.753] [INFO] From service poll - Poll : Listening on port 3012
[2020-11-11T18:05:05.345] [INFO] From service telemetry-listener - Telemetry : Listening on port 3007
[2020-11-11T18:05:05.418] [INFO] From service anomaly-handler-service - Telemetry Analyser : Listening on port 3013
[2020-11-11T18:05:06.065] [INFO] From service payload - Rocket : Listening on port 3015
[2020-11-11T18:05:06.123] [INFO] From service payload - SOAP server listening on port 3005
[2020-11-11T18:05:06.114] [INFO] From service realtime - Real Time : Listening on port 3006
[2020-11-11T18:05:06.925] [INFO] From service mission - Mission : Listening on port 3002
[2020-11-11T18:05:07.147] [INFO] From service booster - Booster : Listening on port 3010
[2020-11-11T18:05:07.170] [INFO] From service booster - SOAP server listening on port 3004
[2020-11-11T18:05:07.359] [INFO] From service rocket - Rocket : Listening on port 3011
[2020-11-11T18:05:07.392] [INFO] From service rocket - SOAP server listening on port 3000
[2020-11-11T18:05:07.504] [INFO] From service telemetry-writer - Subscribe to telemetryData
[2020-11-11T18:05:07.522] [INFO] From service telemetry-writer - Telemetry : Listening on port 3003
[2020-11-11T18:05:12.069] [INFO] From service front - When Richard creates a new mission
[2020-11-11T18:05:12.127] [INFO] From service missions-coordinator - Creating mission : 1f2f478f-3684-481c-ba32-708c2be65d97
[2020-11-11T18:05:12.149] [INFO] From service front - Then a new poll is created with its values set as 'false'
[2020-11-11T18:05:12.127] [INFO] From service missions-coordinator - Initialize HeadStages...
[2020-11-11T18:05:12.128] [INFO] From service missions-coordinator - Initialize Payload...
[2020-11-11T18:05:12.192] [INFO] From service front - Then a new head stage is created
[2020-11-11T18:05:12.129] [INFO] From service missions-coordinator - Initialize Booster...
[2020-11-11T18:05:12.129] [INFO] From service missions-coordinator - Initialize RealTime...
[2020-11-11T18:05:12.130] [INFO] From service missions-coordinator - Initialize Mission...
[2020-11-11T18:05:12.131] [INFO] From service missions-coordinator - Initialize Poll...
[2020-11-11T18:05:12.222] [INFO] From service poll - poll : 1f2f478f-3684-481c-ba32-708c2be65d97 created
[2020-11-11T18:05:12.232] [INFO] From service missions-coordinator - Poll initialized
[2020-11-11T18:05:12.262] [INFO] From service missions-coordinator - Mission initialized
[2020-11-11T18:05:12.269] [INFO] From service missions-coordinator - Head Stage initialized
[2020-11-11T18:05:12.272] [INFO] From service missions-coordinator - RealTime initialized
[2020-11-11T18:05:12.249] [INFO] From service rocket - Rocket is on preparation.
[2020-11-11T18:05:12.252] [INFO] From service mission - Creating new mission : 1f2f478f-3684-481c-ba32-708c2be65d97
[2020-11-11T18:05:12.295] [INFO] From service missions-coordinator - Payload initialized
[2020-11-11T18:05:12.299] [INFO] From service missions-coordinator - Booster initialized
[2020-11-11T18:05:12.306] [INFO] From service front - And a new booster is created
[2020-11-11T18:05:12.351] [INFO] From service front - And a new payload is created
[2020-11-11T18:05:12.380] [INFO] From service front - When she answers positively to the poll
[2020-11-11T18:05:12.388] [INFO] From service poll - The weather department response for the poll is true
[2020-11-11T18:05:12.395] [INFO] From service front - Then the weather department vote is 'true'
[2020-11-11T18:05:12.417] [INFO] From service front - When Elon gets the poll
[2020-11-11T18:05:12.433] [INFO] From service front - Then he sees that Tory has answered to it so it is his turn to answer
[2020-11-11T18:05:12.440] [INFO] From service front - When he gets the rocket status
[2020-11-11T18:05:12.477] [INFO] From service front - Then he sees the rocket is 'On preparation'
[2020-11-11T18:05:12.480] [INFO] From service front - When Elon puts the rocket on internal power
[2020-11-11T18:05:12.576] [INFO] From service front - Then the status of the rocket is now 'On internal power' and everything is going fine for the rocket
[2020-11-11T18:05:12.631] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:05:12.632] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 1,
  fuelLevel: 70,
  altitude: 0,
  speed: 0,
  pressure: 0
}
[2020-11-11T18:05:12.825] [INFO] From service realtime - Status of the rocket changed : 1
[2020-11-11T18:05:13.588] [INFO] From service front - When he answers positively to the poll
[2020-11-11T18:05:13.591] [INFO] From service front - Then the rocket department answer to the poll is now 'true'
[2020-11-11T18:05:13.594] [INFO] From service poll - The rocket department response for the poll is true
[2020-11-11T18:05:13.600] [INFO] From service front - When it's Richard's turn to answer, he votes on the poll
[2020-11-11T18:05:13.603] [INFO] From service poll - The mission department response for the poll is true
[2020-11-11T18:05:13.607] [INFO] From service front - Then the poll shows that the mission department vote is 'true'
[2020-11-11T18:05:13.613] [INFO] From service front - When Elon initializes the launch process
[2020-11-11T18:05:13.624] [INFO] From service front - Then Richard and Marie see in real time that the status of the rocket is now on 'Startup'
[2020-11-11T18:05:13.631] [INFO] From service rocket - Initializing startup process.
[2020-11-11T18:05:13.643] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:05:13.657] [INFO] From service realtime - Status of the rocket changed : 2
[2020-11-11T18:05:13.644] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 2,
  fuelLevel: 70,
  altitude: 0,
  speed: 0,
  pressure: 0
}
[2020-11-11T18:05:13.648] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:05:13.649] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 2,
  fuelLevel: 70,
  altitude: 0,
  speed: 0,
  pressure: 0
}
[2020-11-11T18:05:13.703] [INFO] From service realtime - Status of the rocket changed : 2
[2020-11-11T18:05:14.632] [INFO] From service rocket - T-10s.
[2020-11-11T18:05:14.634] [INFO] From service front - When 2 seconds have passed after startup
[2020-11-11T18:05:15.632] [INFO] From service rocket - T-9s.
[2020-11-11T18:05:15.640] [INFO] From service front - Then Richard and Marie see in real time that the rocket status is now 'Main engine started' after startup
[2020-11-11T18:05:16.634] [INFO] From service rocket - T-8s.
[2020-11-11T18:05:17.636] [INFO] From service rocket - T-7s.
[2020-11-11T18:05:18.638] [INFO] From service rocket - T-6s.
[2020-11-11T18:05:19.640] [INFO] From service rocket - T-5s.
[2020-11-11T18:05:20.646] [INFO] From service rocket - T-4s.
[2020-11-11T18:05:20.648] [INFO] From service rocket - Starting main engine.
[2020-11-11T18:05:20.662] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:05:20.663] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 3,
  fuelLevel: 70,
  altitude: 0,
  speed: 0,
  pressure: 0
}
[2020-11-11T18:05:20.667] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:05:20.667] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 3,
  fuelLevel: 70,
  altitude: 0,
  speed: 0,
  pressure: 0
}
[2020-11-11T18:05:20.680] [INFO] From service realtime - Status of the rocket changed : 2
[2020-11-11T18:05:20.714] [INFO] From service realtime - Status of the rocket changed : 3
[2020-11-11T18:05:21.652] [INFO] From service rocket - T-3s.
[2020-11-11T18:05:22.654] [INFO] From service rocket - T-2s.
[2020-11-11T18:05:23.654] [INFO] From service rocket - T-1s.
[2020-11-11T18:05:23.656] [INFO] From service rocket - T+00:00:00.
[2020-11-11T18:05:23.656] [INFO] From service rocket - Sending launch signal to booster!
[2020-11-11T18:05:23.705] [INFO] From service booster - Launching booster
[2020-11-11T18:05:23.706] [INFO] From service booster - Booster launched
[2020-11-11T18:05:23.733] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:05:23.733] [INFO] From service telemetry-listener - {
  boosterStatus: 0,
  fuelLevel: 65,
  altitude: 0,
  speed: 0,
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97'
}
[2020-11-11T18:05:23.786] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:05:23.792] [INFO] From service realtime - Status of the booster changed : 0
[2020-11-11T18:05:23.811] [INFO] From service rocket - Rocket has been launched!
[2020-11-11T18:05:23.834] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:05:23.834] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 4,
  fuelLevel: 70,
  altitude: 0,
  speed: 0,
  pressure: 0
}
[2020-11-11T18:05:23.867] [INFO] From service realtime - Status of the rocket changed : 4
[2020-11-11T18:05:21.660] [INFO] From service front - When 3 seconds have passed after main engine
[2020-11-11T18:05:24.663] [INFO] From service front - Then Richard and Marie see in real time that the rocket is 'Launched'
[2020-11-11T18:05:24.825] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:05:24.826] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 4,
  fuelLevel: 70,
  altitude: 0,
  speed: 0.5,
  pressure: 5
}
[2020-11-11T18:05:24.852] [INFO] From service realtime - Status of the rocket changed : 4
[2020-11-11T18:05:24.858] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:05:24.859] [INFO] From service telemetry-listener - {
  boosterStatus: 0,
  fuelLevel: 65,
  altitude: 0,
  speed: 0.5,
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97'
}
[2020-11-11T18:05:24.890] [INFO] From service realtime - Status of the booster changed : 0
[2020-11-11T18:05:24.896] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:05:25.168] [INFO] From service front - When the pressure of the rocket is at 70
[2020-11-11T18:05:25.827] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:05:25.828] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 4,
  fuelLevel: 70,
  altitude: 0.5,
  speed: 1,
  pressure: 10
}
[2020-11-11T18:05:25.850] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:05:25.851] [INFO] From service telemetry-listener - {
  boosterStatus: 0,
  fuelLevel: 65,
  altitude: 0.5,
  speed: 1,
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97'
}
[2020-11-11T18:05:25.860] [INFO] From service realtime - Status of the rocket changed : 4
[2020-11-11T18:05:25.879] [INFO] From service realtime - Status of the booster changed : 0
[2020-11-11T18:05:25.896] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:05:26.714] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:05:26.715] [INFO] From service telemetry-listener - {
  boosterStatus: 0,
  fuelLevel: 62,
  altitude: 0.5,
  speed: 1,
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97'
}
[2020-11-11T18:05:26.728] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:05:26.744] [INFO] From service realtime - Status of the booster changed : 0
[2020-11-11T18:05:26.831] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:05:26.832] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 4,
  fuelLevel: 70,
  altitude: 1.5,
  speed: 1.5,
  pressure: 15
}
[2020-11-11T18:05:26.843] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:05:26.843] [INFO] From service telemetry-listener - {
  boosterStatus: 0,
  fuelLevel: 62,
  altitude: 1.5,
  speed: 1.5,
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97'
}
[2020-11-11T18:05:26.865] [INFO] From service realtime - Status of the rocket changed : 4
[2020-11-11T18:05:26.891] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:05:26.894] [INFO] From service realtime - Status of the booster changed : 0
[2020-11-11T18:05:27.832] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:05:27.833] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 4,
  fuelLevel: 70,
  altitude: 3,
  speed: 2,
  pressure: 20
}
[2020-11-11T18:05:27.852] [INFO] From service realtime - Status of the rocket changed : 4
[2020-11-11T18:05:27.868] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:05:27.868] [INFO] From service telemetry-listener - {
  boosterStatus: 0,
  fuelLevel: 62,
  altitude: 3,
  speed: 2,
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97'
}
[2020-11-11T18:05:27.887] [INFO] From service realtime - Status of the booster changed : 0
[2020-11-11T18:05:27.898] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:05:28.800] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:05:28.806] [INFO] From service realtime - Status of the rocket changed : 4
[2020-11-11T18:05:28.800] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 4,
  fuelLevel: 70,
  altitude: 5,
  speed: 2.5,
  pressure: 25
}
[2020-11-11T18:05:28.819] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:05:28.819] [INFO] From service telemetry-listener - {
  boosterStatus: 0,
  fuelLevel: 62,
  altitude: 5,
  speed: 2.5,
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97'
}
[2020-11-11T18:05:28.848] [INFO] From service realtime - Status of the booster changed : 0
[2020-11-11T18:05:28.853] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:05:29.680] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:05:29.680] [INFO] From service telemetry-listener - {
  boosterStatus: 0,
  fuelLevel: 59,
  altitude: 5,
  speed: 2.5,
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97'
}
[2020-11-11T18:05:29.689] [INFO] From service realtime - Status of the booster changed : 0
[2020-11-11T18:05:29.690] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:05:29.800] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:05:29.800] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 4,
  fuelLevel: 70,
  altitude: 7.5,
  speed: 3,
  pressure: 30
}
[2020-11-11T18:05:29.819] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:05:29.819] [INFO] From service telemetry-listener - {
  boosterStatus: 0,
  fuelLevel: 59,
  altitude: 7.5,
  speed: 3,
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97'
}
[2020-11-11T18:05:29.831] [INFO] From service realtime - Status of the rocket changed : 4
[2020-11-11T18:05:29.858] [INFO] From service realtime - Status of the booster changed : 0
[2020-11-11T18:05:29.859] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:05:30.804] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:05:30.804] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 4,
  fuelLevel: 70,
  altitude: 10.5,
  speed: 3.5,
  pressure: 35
}
[2020-11-11T18:05:30.819] [INFO] From service realtime - Status of the rocket changed : 4
[2020-11-11T18:05:30.828] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:05:30.829] [INFO] From service telemetry-listener - {
  boosterStatus: 0,
  fuelLevel: 59,
  altitude: 10.5,
  speed: 3.5,
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97'
}
[2020-11-11T18:05:30.854] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:05:30.857] [INFO] From service realtime - Status of the booster changed : 0
[2020-11-11T18:05:31.807] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:05:31.807] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 4,
  fuelLevel: 70,
  altitude: 14,
  speed: 4,
  pressure: 40
}
[2020-11-11T18:05:31.824] [INFO] From service realtime - Status of the rocket changed : 4
[2020-11-11T18:05:31.818] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:05:31.819] [INFO] From service telemetry-listener - {
  boosterStatus: 0,
  fuelLevel: 59,
  altitude: 14,
  speed: 4,
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97'
}
[2020-11-11T18:05:31.854] [INFO] From service realtime - Status of the booster changed : 0
[2020-11-11T18:05:31.856] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:05:32.684] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:05:32.684] [INFO] From service telemetry-listener - {
  boosterStatus: 0,
  fuelLevel: 56,
  altitude: 14,
  speed: 4,
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97'
}
[2020-11-11T18:05:32.693] [INFO] From service realtime - Status of the booster changed : 0
[2020-11-11T18:05:32.695] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:05:32.810] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:05:32.811] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 4,
  fuelLevel: 70,
  altitude: 18,
  speed: 4.5,
  pressure: 45
}
[2020-11-11T18:05:32.821] [INFO] From service realtime - Status of the rocket changed : 4
[2020-11-11T18:05:32.837] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:05:32.839] [INFO] From service telemetry-listener - {
  boosterStatus: 0,
  fuelLevel: 56,
  altitude: 18,
  speed: 4.5,
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97'
}
[2020-11-11T18:05:32.859] [INFO] From service realtime - Status of the booster changed : 0
[2020-11-11T18:05:32.861] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:05:33.813] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:05:33.813] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 4,
  fuelLevel: 70,
  altitude: 22.5,
  speed: 5,
  pressure: 50
}
[2020-11-11T18:05:33.827] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:05:33.828] [INFO] From service telemetry-listener - {
  boosterStatus: 0,
  fuelLevel: 56,
  altitude: 22.5,
  speed: 5,
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97'
}
[2020-11-11T18:05:33.844] [INFO] From service realtime - Status of the rocket changed : 4
[2020-11-11T18:05:33.863] [INFO] From service realtime - Status of the booster changed : 0
[2020-11-11T18:05:33.875] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:05:34.815] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:05:34.815] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 4,
  fuelLevel: 70,
  altitude: 27.5,
  speed: 5.5,
  pressure: 55
}
[2020-11-11T18:05:34.827] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:05:34.828] [INFO] From service telemetry-listener - {
  boosterStatus: 0,
  fuelLevel: 56,
  altitude: 27.5,
  speed: 5.5,
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97'
}
[2020-11-11T18:05:34.839] [INFO] From service realtime - Status of the rocket changed : 4
[2020-11-11T18:05:34.855] [INFO] From service realtime - Status of the booster changed : 0
[2020-11-11T18:05:34.870] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:05:35.682] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:05:35.682] [INFO] From service telemetry-listener - {
  boosterStatus: 0,
  fuelLevel: 53,
  altitude: 27.5,
  speed: 5.5,
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97'
}
[2020-11-11T18:05:35.692] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:05:35.698] [INFO] From service realtime - Status of the booster changed : 0
[2020-11-11T18:05:35.815] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:05:35.816] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 4,
  fuelLevel: 70,
  altitude: 33,
  speed: 6,
  pressure: 60
}
[2020-11-11T18:05:35.830] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:05:35.832] [INFO] From service realtime - Status of the rocket changed : 4
[2020-11-11T18:05:35.830] [INFO] From service telemetry-listener - {
  boosterStatus: 0,
  fuelLevel: 53,
  altitude: 33,
  speed: 6,
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97'
}
[2020-11-11T18:05:35.860] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:05:35.865] [INFO] From service realtime - Status of the booster changed : 0
[2020-11-11T18:05:36.817] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:05:36.818] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 4,
  fuelLevel: 70,
  altitude: 39,
  speed: 6.5,
  pressure: 65
}
[2020-11-11T18:05:36.829] [INFO] From service realtime - Status of the rocket changed : 4
[2020-11-11T18:05:36.836] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:05:36.836] [INFO] From service telemetry-listener - {
  boosterStatus: 0,
  fuelLevel: 53,
  altitude: 39,
  speed: 6.5,
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97'
}
[2020-11-11T18:05:36.881] [INFO] From service realtime - Status of the booster changed : 0
[2020-11-11T18:05:36.883] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:05:37.827] [INFO] From service rocket - Going through MAX Q. Throttling down...
[2020-11-11T18:05:37.843] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:05:37.843] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 4,
  fuelLevel: 70,
  altitude: 45.5,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:05:37.846] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:05:37.846] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 5,
  fuelLevel: 70,
  altitude: 45.5,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:05:37.861] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:05:37.861] [INFO] From service telemetry-listener - {
  boosterStatus: 0,
  fuelLevel: 53,
  altitude: 45.5,
  speed: 7,
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97'
}
[2020-11-11T18:05:37.887] [INFO] From service realtime - Status of the rocket changed : 4
[2020-11-11T18:05:37.900] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:05:37.903] [INFO] From service realtime - Status of the rocket changed : 5
[2020-11-11T18:05:37.932] [INFO] From service realtime - Status of the booster changed : 0
[2020-11-11T18:05:38.684] [INFO] From service front - Then Richard and Marie see in real time that the rocket status is now 'Reached max Q' after main engine started
[2020-11-11T18:05:38.684] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:05:38.685] [INFO] From service telemetry-listener - {
  boosterStatus: 0,
  fuelLevel: 50,
  altitude: 45.5,
  speed: 7,
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97'
}
[2020-11-11T18:05:38.700] [INFO] From service realtime - Status of the booster changed : 0
[2020-11-11T18:05:38.703] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:05:38.835] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:05:38.835] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 5,
  fuelLevel: 70,
  altitude: 52.5,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:05:38.844] [INFO] From service realtime - Status of the rocket changed : 5
[2020-11-11T18:05:38.848] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:05:38.849] [INFO] From service telemetry-listener - {
  boosterStatus: 0,
  fuelLevel: 50,
  altitude: 52.5,
  speed: 7,
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97'
}
[2020-11-11T18:05:38.871] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:05:38.875] [INFO] From service realtime - Status of the booster changed : 0
[2020-11-11T18:05:39.695] [INFO] From service front - And the speed of the rocket does not increase anymore
[2020-11-11T18:05:39.844] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:05:39.845] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 5,
  fuelLevel: 70,
  altitude: 59.5,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:05:39.860] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:05:39.862] [INFO] From service realtime - Status of the rocket changed : 5
[2020-11-11T18:05:39.860] [INFO] From service telemetry-listener - {
  boosterStatus: 0,
  fuelLevel: 50,
  altitude: 59.5,
  speed: 7,
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97'
}
[2020-11-11T18:05:39.887] [INFO] From service realtime - Status of the booster changed : 0
[2020-11-11T18:05:39.902] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:05:40.844] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:05:40.844] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 5,
  fuelLevel: 70,
  altitude: 66.5,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:05:40.865] [INFO] From service realtime - Status of the rocket changed : 5
[2020-11-11T18:05:40.868] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:05:40.868] [INFO] From service telemetry-listener - {
  boosterStatus: 0,
  fuelLevel: 50,
  altitude: 66.5,
  speed: 7,
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97'
}
[2020-11-11T18:05:40.889] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:05:40.902] [INFO] From service realtime - Status of the booster changed : 0
[2020-11-11T18:05:41.209] [INFO] From service front - When the booster has 15hl of fuel left
[2020-11-11T18:05:41.685] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:05:41.686] [INFO] From service telemetry-listener - {
  boosterStatus: 0,
  fuelLevel: 47,
  altitude: 66.5,
  speed: 7,
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97'
}
[2020-11-11T18:05:41.699] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:05:41.703] [INFO] From service realtime - Status of the booster changed : 0
[2020-11-11T18:05:41.717] [INFO] From service front - Then Richard and Marie see in real time that the rocket status is 'Main engine cut-off'
[2020-11-11T18:05:41.843] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:05:41.843] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 5,
  fuelLevel: 70,
  altitude: 73.5,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:05:41.850] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:05:41.851] [INFO] From service telemetry-listener - {
  boosterStatus: 0,
  fuelLevel: 47,
  altitude: 73.5,
  speed: 7,
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97'
}
[2020-11-11T18:05:41.861] [INFO] From service realtime - Status of the rocket changed : 5
[2020-11-11T18:05:41.879] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:05:41.880] [INFO] From service realtime - Status of the booster changed : 0
[2020-11-11T18:05:42.843] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:05:42.844] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 5,
  fuelLevel: 70,
  altitude: 80.5,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:05:42.862] [INFO] From service realtime - Status of the rocket changed : 5
[2020-11-11T18:05:42.865] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:05:42.867] [INFO] From service telemetry-listener - {
  boosterStatus: 0,
  fuelLevel: 47,
  altitude: 80.5,
  speed: 7,
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97'
}
[2020-11-11T18:05:42.902] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:05:42.904] [INFO] From service realtime - Status of the booster changed : 0
[2020-11-11T18:05:43.846] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:05:43.846] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 5,
  fuelLevel: 70,
  altitude: 87.5,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:05:43.866] [INFO] From service realtime - Status of the rocket changed : 5
[2020-11-11T18:05:43.877] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:05:43.878] [INFO] From service telemetry-listener - {
  boosterStatus: 0,
  fuelLevel: 47,
  altitude: 87.5,
  speed: 7,
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97'
}
[2020-11-11T18:05:43.887] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:05:43.900] [INFO] From service realtime - Status of the booster changed : 0
[2020-11-11T18:05:44.688] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:05:44.688] [INFO] From service telemetry-listener - {
  boosterStatus: 0,
  fuelLevel: 44,
  altitude: 87.5,
  speed: 7,
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97'
}
[2020-11-11T18:05:44.699] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:05:44.704] [INFO] From service realtime - Status of the booster changed : 0
[2020-11-11T18:05:44.850] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:05:44.852] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 5,
  fuelLevel: 70,
  altitude: 94.5,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:05:44.868] [INFO] From service realtime - Status of the rocket changed : 5
[2020-11-11T18:05:44.866] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:05:44.868] [INFO] From service telemetry-listener - {
  boosterStatus: 0,
  fuelLevel: 44,
  altitude: 94.5,
  speed: 7,
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97'
}
[2020-11-11T18:05:44.892] [INFO] From service realtime - Status of the booster changed : 0
[2020-11-11T18:05:44.898] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:05:45.856] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:05:45.856] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 5,
  fuelLevel: 70,
  altitude: 101.5,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:05:45.873] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:05:45.873] [INFO] From service telemetry-listener - {
  boosterStatus: 0,
  fuelLevel: 44,
  altitude: 101.5,
  speed: 7,
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97'
}
[2020-11-11T18:05:45.884] [INFO] From service realtime - Status of the rocket changed : 5
[2020-11-11T18:05:45.893] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:05:45.899] [INFO] From service realtime - Status of the booster changed : 0
[2020-11-11T18:05:46.854] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:05:46.855] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 5,
  fuelLevel: 70,
  altitude: 108.5,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:05:46.869] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:05:46.870] [INFO] From service telemetry-listener - {
  boosterStatus: 0,
  fuelLevel: 44,
  altitude: 108.5,
  speed: 7,
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97'
}
[2020-11-11T18:05:46.885] [INFO] From service realtime - Status of the rocket changed : 5
[2020-11-11T18:05:46.899] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:05:46.905] [INFO] From service realtime - Status of the booster changed : 0
[2020-11-11T18:05:47.688] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:05:47.689] [INFO] From service telemetry-listener - {
  boosterStatus: 0,
  fuelLevel: 41,
  altitude: 108.5,
  speed: 7,
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97'
}
[2020-11-11T18:05:47.701] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:05:47.712] [INFO] From service realtime - Status of the booster changed : 0
[2020-11-11T18:05:47.858] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:05:47.858] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 5,
  fuelLevel: 70,
  altitude: 115.5,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:05:47.871] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:05:47.874] [INFO] From service realtime - Status of the rocket changed : 5
[2020-11-11T18:05:47.872] [INFO] From service telemetry-listener - {
  boosterStatus: 0,
  fuelLevel: 41,
  altitude: 115.5,
  speed: 7,
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97'
}
[2020-11-11T18:05:47.903] [INFO] From service realtime - Status of the booster changed : 0
[2020-11-11T18:05:47.904] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:05:48.860] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:05:48.860] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 5,
  fuelLevel: 70,
  altitude: 122.5,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:05:48.874] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:05:48.875] [INFO] From service telemetry-listener - {
  boosterStatus: 0,
  fuelLevel: 41,
  altitude: 122.5,
  speed: 7,
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97'
}
[2020-11-11T18:05:48.884] [INFO] From service realtime - Status of the rocket changed : 5
[2020-11-11T18:05:48.910] [INFO] From service realtime - Status of the booster changed : 0
[2020-11-11T18:05:48.912] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:05:49.863] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:05:49.863] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 5,
  fuelLevel: 70,
  altitude: 129.5,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:05:49.874] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:05:49.874] [INFO] From service telemetry-listener - {
  boosterStatus: 0,
  fuelLevel: 41,
  altitude: 129.5,
  speed: 7,
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97'
}
[2020-11-11T18:05:49.879] [INFO] From service realtime - Status of the rocket changed : 5
[2020-11-11T18:05:49.897] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:05:49.901] [INFO] From service realtime - Status of the booster changed : 0
[2020-11-11T18:05:50.694] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:05:50.695] [INFO] From service telemetry-listener - {
  boosterStatus: 0,
  fuelLevel: 38,
  altitude: 129.5,
  speed: 7,
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97'
}
[2020-11-11T18:05:50.706] [INFO] From service realtime - Status of the booster changed : 0
[2020-11-11T18:05:50.708] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:05:50.869] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:05:50.870] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 5,
  fuelLevel: 70,
  altitude: 136.5,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:05:50.889] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:05:50.889] [INFO] From service telemetry-listener - {
  boosterStatus: 0,
  fuelLevel: 38,
  altitude: 136.5,
  speed: 7,
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97'
}
[2020-11-11T18:05:50.900] [INFO] From service realtime - Status of the rocket changed : 5
[2020-11-11T18:05:50.921] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:05:50.933] [INFO] From service realtime - Status of the booster changed : 0
[2020-11-11T18:05:51.866] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:05:51.866] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 5,
  fuelLevel: 70,
  altitude: 143.5,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:05:51.874] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:05:51.875] [INFO] From service telemetry-listener - {
  boosterStatus: 0,
  fuelLevel: 38,
  altitude: 143.5,
  speed: 7,
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97'
}
[2020-11-11T18:05:51.903] [INFO] From service realtime - Status of the rocket changed : 5
[2020-11-11T18:05:51.915] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:05:51.924] [INFO] From service realtime - Status of the booster changed : 0
[2020-11-11T18:05:52.871] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:05:52.871] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 5,
  fuelLevel: 70,
  altitude: 150.5,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:05:52.883] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:05:52.884] [INFO] From service telemetry-listener - {
  boosterStatus: 0,
  fuelLevel: 38,
  altitude: 150.5,
  speed: 7,
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97'
}
[2020-11-11T18:05:52.888] [INFO] From service realtime - Status of the rocket changed : 5
[2020-11-11T18:05:52.905] [INFO] From service realtime - Status of the booster changed : 0
[2020-11-11T18:05:52.924] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:05:53.692] [INFO] From service booster - Initializing booster detachment.
[2020-11-11T18:05:53.695] [INFO] From service booster - Landing booster.
[2020-11-11T18:05:53.699] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:05:53.700] [INFO] From service telemetry-listener - {
  boosterStatus: 0,
  fuelLevel: 35,
  altitude: 150.5,
  speed: 7,
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97'
}
[2020-11-11T18:05:53.703] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:05:53.703] [INFO] From service telemetry-listener - {
  boosterStatus: 0,
  fuelLevel: 35,
  altitude: 150.5,
  speed: 7,
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97'
}
[2020-11-11T18:05:53.719] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:05:53.719] [INFO] From service realtime - Status of the booster changed : 0
[2020-11-11T18:05:53.732] [INFO] From service realtime - Status of the booster changed : 0
[2020-11-11T18:05:53.742] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:05:53.874] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:05:53.875] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 5,
  fuelLevel: 70,
  altitude: 157.5,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:05:53.890] [INFO] From service realtime - Status of the rocket changed : 5
[2020-11-11T18:05:54.879] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:05:54.879] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 5,
  fuelLevel: 70,
  altitude: 164.5,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:05:54.887] [INFO] From service realtime - Status of the rocket changed : 5
[2020-11-11T18:05:55.885] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:05:55.886] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 5,
  fuelLevel: 70,
  altitude: 171.5,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:05:55.899] [INFO] From service realtime - Status of the rocket changed : 5
[2020-11-11T18:05:56.701] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:05:56.701] [INFO] From service telemetry-listener - {
  boosterStatus: 1,
  fuelLevel: 34,
  altitude: 143.5,
  speed: 7,
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97'
}
[2020-11-11T18:05:56.711] [INFO] From service realtime - Status of the booster changed : 1
[2020-11-11T18:05:56.715] [INFO] From service rocket - Main engine cut off.
[2020-11-11T18:05:56.729] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:05:56.716] [INFO] From service rocket - Booster detached.
[2020-11-11T18:05:56.716] [INFO] From service rocket - Rocket engines started.
[2020-11-11T18:05:56.739] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:05:56.740] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 6,
  fuelLevel: 70,
  altitude: 175,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:05:56.745] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:05:56.745] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 6,
  fuelLevel: 70,
  altitude: 175,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:05:56.766] [INFO] From service realtime - Status of the rocket changed : 6
[2020-11-11T18:05:56.778] [INFO] From service realtime - Status of the rocket changed : 6
[2020-11-11T18:05:56.884] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:05:56.884] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 6,
  fuelLevel: 70,
  altitude: 182,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:05:56.904] [INFO] From service realtime - Status of the rocket changed : 6
[2020-11-11T18:05:57.285] [INFO] From service front - And then the rocket status is 'Stage separation' after main engine
[2020-11-11T18:05:59.670] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:05:59.670] [INFO] From service telemetry-listener - {
  boosterStatus: 1,
  fuelLevel: 33,
  altitude: 136.5,
  speed: 7,
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97'
}
[2020-11-11T18:05:59.676] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:05:59.683] [INFO] From service rocket - Booster detached.
[2020-11-11T18:05:59.684] [INFO] From service rocket - Rocket engines started.
[2020-11-11T18:05:59.688] [INFO] From service realtime - Status of the booster changed : 1
[2020-11-11T18:05:59.690] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:05:59.691] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 7,
  fuelLevel: 70,
  altitude: 185.5,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:05:59.699] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:05:59.701] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 7,
  fuelLevel: 70,
  altitude: 185.5,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:05:59.718] [INFO] From service realtime - Status of the rocket changed : 7
[2020-11-11T18:05:59.736] [INFO] From service realtime - Status of the rocket changed : 7
[2020-11-11T18:06:00.259] [INFO] From service front - And then the rocket status is 'Second engine started' after stage separation
[2020-11-11T18:06:02.675] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:06:02.676] [INFO] From service telemetry-listener - {
  boosterStatus: 1,
  fuelLevel: 32,
  altitude: 129.5,
  speed: 7,
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97'
}
[2020-11-11T18:06:02.686] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:06:02.685] [INFO] From service rocket - Rocket engines started.
[2020-11-11T18:06:02.688] [INFO] From service realtime - Status of the booster changed : 1
[2020-11-11T18:06:02.697] [INFO] From service rocket - Second stage of flight initialized.
[2020-11-11T18:06:02.700] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:06:02.700] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 8,
  fuelLevel: 70,
  altitude: 189,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:06:02.708] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:06:02.708] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 8,
  fuelLevel: 70,
  altitude: 189,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:06:02.735] [INFO] From service realtime - Status of the rocket changed : 8
[2020-11-11T18:06:02.736] [INFO] From service realtime - Status of the rocket changed : 8
[2020-11-11T18:06:03.272] [INFO] From service front - And then the booster is going through a 'Flip maneuver'
[2020-11-11T18:06:03.703] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:06:03.703] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 8,
  fuelLevel: 69,
  altitude: 196,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:06:03.713] [INFO] From service realtime - Status of the rocket changed : 8
[2020-11-11T18:06:04.281] [INFO] From service front - And then the booster status is 'Entry burn' after flip maneuver
[2020-11-11T18:06:04.705] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:06:04.706] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 8,
  fuelLevel: 68,
  altitude: 203,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:06:04.718] [INFO] From service realtime - Status of the rocket changed : 8
[2020-11-11T18:06:05.675] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:06:05.676] [INFO] From service telemetry-listener - {
  boosterStatus: 1,
  fuelLevel: 31,
  altitude: 122.5,
  speed: 7,
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97'
}
[2020-11-11T18:06:05.684] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:06:05.686] [INFO] From service realtime - Status of the booster changed : 1
[2020-11-11T18:06:05.707] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:06:05.707] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 8,
  fuelLevel: 67,
  altitude: 210,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:06:05.720] [INFO] From service realtime - Status of the rocket changed : 8
[2020-11-11T18:06:06.710] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:06:06.711] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 8,
  fuelLevel: 66,
  altitude: 217,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:06:06.724] [INFO] From service realtime - Status of the rocket changed : 8
[2020-11-11T18:06:07.709] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:06:07.710] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 8,
  fuelLevel: 65,
  altitude: 224,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:06:07.727] [INFO] From service realtime - Status of the rocket changed : 8
[2020-11-11T18:06:08.678] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:06:08.679] [INFO] From service telemetry-listener - {
  boosterStatus: 2,
  fuelLevel: 30,
  altitude: 115.5,
  speed: 7,
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97'
}
[2020-11-11T18:06:08.687] [INFO] From service realtime - Status of the booster changed : 2
[2020-11-11T18:06:08.691] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:06:08.710] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:06:08.711] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 8,
  fuelLevel: 64,
  altitude: 231,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:06:08.744] [INFO] From service realtime - Status of the rocket changed : 8
[2020-11-11T18:06:09.304] [INFO] From service front - And then the booster status is 'Guidance' after entry burn
[2020-11-11T18:06:09.712] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:06:09.712] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 8,
  fuelLevel: 63,
  altitude: 238,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:06:09.730] [INFO] From service realtime - Status of the rocket changed : 8
[2020-11-11T18:06:10.715] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:06:10.716] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 8,
  fuelLevel: 62,
  altitude: 245,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:06:10.722] [INFO] From service realtime - Status of the rocket changed : 8
[2020-11-11T18:06:11.682] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:06:11.682] [INFO] From service telemetry-listener - {
  boosterStatus: 2,
  fuelLevel: 29,
  altitude: 108.5,
  speed: 7,
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97'
}
[2020-11-11T18:06:11.702] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:06:11.702] [INFO] From service realtime - Status of the booster changed : 2
[2020-11-11T18:06:11.718] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:06:11.718] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 8,
  fuelLevel: 61,
  altitude: 252,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:06:11.732] [INFO] From service realtime - Status of the rocket changed : 8
[2020-11-11T18:06:12.719] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:06:12.720] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 8,
  fuelLevel: 60,
  altitude: 259,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:06:12.737] [INFO] From service realtime - Status of the rocket changed : 8
[2020-11-11T18:06:13.724] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:06:13.724] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 8,
  fuelLevel: 59,
  altitude: 266,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:06:13.730] [INFO] From service realtime - Status of the rocket changed : 8
[2020-11-11T18:06:14.687] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:06:14.687] [INFO] From service telemetry-listener - {
  boosterStatus: 2,
  fuelLevel: 28,
  altitude: 101.5,
  speed: 7,
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97'
}
[2020-11-11T18:06:14.693] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:06:14.700] [INFO] From service realtime - Status of the booster changed : 2
[2020-11-11T18:06:14.722] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:06:14.722] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 8,
  fuelLevel: 58,
  altitude: 273,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:06:14.733] [INFO] From service realtime - Status of the rocket changed : 8
[2020-11-11T18:06:15.725] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:06:15.726] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 8,
  fuelLevel: 57,
  altitude: 280,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:06:15.743] [INFO] From service realtime - Status of the rocket changed : 8
[2020-11-11T18:06:16.727] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:06:16.728] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 8,
  fuelLevel: 56,
  altitude: 287,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:06:16.749] [INFO] From service realtime - Status of the rocket changed : 8
[2020-11-11T18:06:17.689] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:06:17.690] [INFO] From service telemetry-listener - {
  boosterStatus: 2,
  fuelLevel: 27,
  altitude: 94.5,
  speed: 7,
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97'
}
[2020-11-11T18:06:17.696] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:06:17.702] [INFO] From service realtime - Status of the booster changed : 2
[2020-11-11T18:06:17.728] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:06:17.728] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 8,
  fuelLevel: 55,
  altitude: 294,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:06:17.746] [INFO] From service realtime - Status of the rocket changed : 8
[2020-11-11T18:06:18.729] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:06:18.730] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 8,
  fuelLevel: 54,
  altitude: 301,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:06:18.744] [INFO] From service realtime - Status of the rocket changed : 8
[2020-11-11T18:06:19.735] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:06:19.736] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 8,
  fuelLevel: 53,
  altitude: 308,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:06:19.749] [INFO] From service realtime - Status of the rocket changed : 8
[2020-11-11T18:06:20.692] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:06:20.692] [INFO] From service telemetry-listener - {
  boosterStatus: 3,
  fuelLevel: 26,
  altitude: 87.5,
  speed: 7,
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97'
}
[2020-11-11T18:06:20.698] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:06:20.708] [INFO] From service realtime - Status of the booster changed : 3
[2020-11-11T18:06:20.737] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:06:20.738] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 8,
  fuelLevel: 52,
  altitude: 315,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:06:20.753] [INFO] From service realtime - Status of the rocket changed : 8
[2020-11-11T18:06:21.366] [INFO] From service front - And then the booster status is 'Landing burn' after guidance
[2020-11-11T18:06:21.735] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:06:21.736] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 8,
  fuelLevel: 51,
  altitude: 322,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:06:21.757] [INFO] From service realtime - Status of the rocket changed : 8
[2020-11-11T18:06:22.737] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:06:22.738] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 8,
  fuelLevel: 50,
  altitude: 329,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:06:22.752] [INFO] From service realtime - Status of the rocket changed : 8
[2020-11-11T18:06:23.695] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:06:23.695] [INFO] From service telemetry-listener - {
  boosterStatus: 3,
  fuelLevel: 25,
  altitude: 80.5,
  speed: 7,
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97'
}
[2020-11-11T18:06:23.711] [INFO] From service realtime - Status of the booster changed : 3
[2020-11-11T18:06:23.713] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:06:23.738] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:06:23.738] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 8,
  fuelLevel: 49,
  altitude: 336,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:06:23.747] [INFO] From service realtime - Status of the rocket changed : 8
[2020-11-11T18:06:24.739] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:06:24.739] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 8,
  fuelLevel: 48,
  altitude: 343,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:06:24.750] [INFO] From service realtime - Status of the rocket changed : 8
[2020-11-11T18:06:25.742] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:06:25.743] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 8,
  fuelLevel: 47,
  altitude: 350,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:06:25.747] [INFO] From service realtime - Status of the rocket changed : 8
[2020-11-11T18:06:26.701] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:06:26.702] [INFO] From service telemetry-listener - {
  boosterStatus: 3,
  fuelLevel: 24,
  altitude: 73.5,
  speed: 7,
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97'
}
[2020-11-11T18:06:26.709] [INFO] From service realtime - Status of the booster changed : 3
[2020-11-11T18:06:26.718] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:06:26.746] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:06:26.747] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 8,
  fuelLevel: 46,
  altitude: 357,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:06:26.758] [INFO] From service realtime - Status of the rocket changed : 8
[2020-11-11T18:06:27.745] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:06:27.745] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 8,
  fuelLevel: 45,
  altitude: 364,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:06:27.768] [INFO] From service realtime - Status of the rocket changed : 8
[2020-11-11T18:06:28.624] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:06:28.625] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 8,
  fuelLevel: 44,
  altitude: 371,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:06:28.634] [INFO] From service realtime - Status of the rocket changed : 8
[2020-11-11T18:06:29.582] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:06:29.583] [INFO] From service telemetry-listener - {
  boosterStatus: 3,
  fuelLevel: 23,
  altitude: 66.5,
  speed: 7,
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97'
}
[2020-11-11T18:06:29.590] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:06:29.600] [INFO] From service realtime - Status of the booster changed : 3
[2020-11-11T18:06:29.628] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:06:29.630] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 8,
  fuelLevel: 43,
  altitude: 378,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:06:29.637] [INFO] From service realtime - Status of the rocket changed : 8
[2020-11-11T18:06:30.632] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:06:30.633] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 8,
  fuelLevel: 42,
  altitude: 385,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:06:30.652] [INFO] From service realtime - Status of the rocket changed : 8
[2020-11-11T18:06:31.632] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:06:31.634] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 8,
  fuelLevel: 41,
  altitude: 392,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:06:31.639] [INFO] From service realtime - Status of the rocket changed : 8
[2020-11-11T18:06:32.584] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:06:32.585] [INFO] From service telemetry-listener - {
  boosterStatus: 4,
  fuelLevel: 22,
  altitude: 59.5,
  speed: 7,
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97'
}
[2020-11-11T18:06:32.593] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:06:32.597] [INFO] From service realtime - Status of the booster changed : 4
[2020-11-11T18:06:32.630] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:06:32.631] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 8,
  fuelLevel: 40,
  altitude: 399,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:06:32.648] [INFO] From service realtime - Status of the rocket changed : 8
[2020-11-11T18:06:33.296] [INFO] From service front - And then the booster status is 'Landing legs deployed' after landing burn
[2020-11-11T18:06:33.636] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:06:33.636] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 8,
  fuelLevel: 39,
  altitude: 406,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:06:33.654] [INFO] From service realtime - Status of the rocket changed : 8
[2020-11-11T18:06:34.640] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:06:34.641] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 8,
  fuelLevel: 38,
  altitude: 413,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:06:34.652] [INFO] From service realtime - Status of the rocket changed : 8
[2020-11-11T18:06:35.589] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:06:35.589] [INFO] From service telemetry-listener - {
  boosterStatus: 4,
  fuelLevel: 21,
  altitude: 52.5,
  speed: 7,
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97'
}
[2020-11-11T18:06:35.601] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:06:35.605] [INFO] From service realtime - Status of the booster changed : 4
[2020-11-11T18:06:35.643] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:06:35.643] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 8,
  fuelLevel: 37,
  altitude: 420,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:06:35.662] [INFO] From service realtime - Status of the rocket changed : 8
[2020-11-11T18:06:36.643] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:06:36.644] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 8,
  fuelLevel: 36,
  altitude: 427,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:06:36.653] [INFO] From service realtime - Status of the rocket changed : 8
[2020-11-11T18:06:37.647] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:06:37.647] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 8,
  fuelLevel: 35,
  altitude: 434,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:06:37.657] [INFO] From service realtime - Status of the rocket changed : 8
[2020-11-11T18:06:38.595] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:06:38.596] [INFO] From service telemetry-listener - {
  boosterStatus: 4,
  fuelLevel: 20,
  altitude: 45.5,
  speed: 7,
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97'
}
[2020-11-11T18:06:38.604] [INFO] From service realtime - Status of the booster changed : 4
[2020-11-11T18:06:38.607] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:06:38.651] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:06:38.651] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 8,
  fuelLevel: 34,
  altitude: 441,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:06:38.670] [INFO] From service realtime - Status of the rocket changed : 8
[2020-11-11T18:06:39.654] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:06:39.654] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 8,
  fuelLevel: 33,
  altitude: 448,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:06:39.666] [INFO] From service realtime - Status of the rocket changed : 8
[2020-11-11T18:06:40.655] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:06:40.657] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 8,
  fuelLevel: 32,
  altitude: 455,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:06:40.664] [INFO] From service realtime - Status of the rocket changed : 8
[2020-11-11T18:06:41.597] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:06:41.597] [INFO] From service telemetry-listener - {
  boosterStatus: 4,
  fuelLevel: 19,
  altitude: 38.5,
  speed: 7,
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97'
}
[2020-11-11T18:06:41.603] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:06:41.614] [INFO] From service realtime - Status of the booster changed : 4
[2020-11-11T18:06:41.677] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:06:41.677] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 8,
  fuelLevel: 31,
  altitude: 462,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:06:41.684] [INFO] From service realtime - Status of the rocket changed : 8
[2020-11-11T18:06:42.665] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:06:42.665] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 8,
  fuelLevel: 30,
  altitude: 469,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:06:42.682] [INFO] From service realtime - Status of the rocket changed : 8
[2020-11-11T18:06:43.669] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:06:43.669] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 8,
  fuelLevel: 29,
  altitude: 476,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:06:43.693] [INFO] From service realtime - Status of the rocket changed : 8
[2020-11-11T18:06:44.603] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:06:44.604] [INFO] From service telemetry-listener - {
  boosterStatus: 5,
  fuelLevel: 18,
  altitude: 31.5,
  speed: 7,
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97'
}
[2020-11-11T18:06:44.611] [INFO] From service realtime - Status of the booster changed : 5
[2020-11-11T18:06:44.616] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:06:44.672] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:06:44.674] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 8,
  fuelLevel: 28,
  altitude: 483,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:06:44.688] [INFO] From service realtime - Status of the rocket changed : 8
[2020-11-11T18:06:45.363] [INFO] From service front - And then the booster is landing, its status is 'Landing'
[2020-11-11T18:06:45.675] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:06:45.675] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 8,
  fuelLevel: 27,
  altitude: 490,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:06:45.686] [INFO] From service realtime - Status of the rocket changed : 8
[2020-11-11T18:06:46.676] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:06:46.676] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 8,
  fuelLevel: 26,
  altitude: 497,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:06:46.684] [INFO] From service realtime - Status of the rocket changed : 8
[2020-11-11T18:06:47.603] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:06:47.604] [INFO] From service telemetry-listener - {
  boosterStatus: 5,
  fuelLevel: 17,
  altitude: 24.5,
  speed: 7,
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97'
}
[2020-11-11T18:06:47.613] [INFO] From service realtime - Status of the booster changed : 5
[2020-11-11T18:06:47.615] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:06:47.685] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:06:47.685] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 8,
  fuelLevel: 25,
  altitude: 504,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:06:47.697] [INFO] From service realtime - Status of the rocket changed : 8
[2020-11-11T18:06:48.684] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:06:48.685] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 8,
  fuelLevel: 24,
  altitude: 511,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:06:48.697] [INFO] From service realtime - Status of the rocket changed : 8
[2020-11-11T18:06:49.685] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:06:49.685] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 8,
  fuelLevel: 23,
  altitude: 518,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:06:49.711] [INFO] From service realtime - Status of the rocket changed : 8
[2020-11-11T18:06:50.607] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:06:50.607] [INFO] From service telemetry-listener - {
  boosterStatus: 5,
  fuelLevel: 16,
  altitude: 17.5,
  speed: 7,
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97'
}
[2020-11-11T18:06:50.621] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:06:50.622] [INFO] From service realtime - Status of the booster changed : 5
[2020-11-11T18:06:50.687] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:06:50.688] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 8,
  fuelLevel: 22,
  altitude: 525,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:06:50.706] [INFO] From service realtime - Status of the rocket changed : 8
[2020-11-11T18:06:51.690] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:06:51.690] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 8,
  fuelLevel: 21,
  altitude: 532,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:06:51.707] [INFO] From service realtime - Status of the rocket changed : 8
[2020-11-11T18:06:52.693] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:06:52.693] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 8,
  fuelLevel: 20,
  altitude: 539,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:06:52.709] [INFO] From service realtime - Status of the rocket changed : 8
[2020-11-11T18:06:53.612] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:06:53.612] [INFO] From service telemetry-listener - {
  boosterStatus: 5,
  fuelLevel: 15,
  altitude: 10.5,
  speed: 7,
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97'
}
[2020-11-11T18:06:53.619] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:06:53.624] [INFO] From service realtime - Status of the booster changed : 5
[2020-11-11T18:06:53.696] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:06:53.696] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 8,
  fuelLevel: 19,
  altitude: 546,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:06:53.704] [INFO] From service realtime - Status of the rocket changed : 8
[2020-11-11T18:06:54.705] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:06:54.705] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 8,
  fuelLevel: 18,
  altitude: 553,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:06:54.731] [INFO] From service realtime - Status of the rocket changed : 8
[2020-11-11T18:06:55.698] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:06:55.698] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 8,
  fuelLevel: 17,
  altitude: 560,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:06:55.713] [INFO] From service realtime - Status of the rocket changed : 8
[2020-11-11T18:06:56.613] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:06:56.614] [INFO] From service telemetry-listener - {
  boosterStatus: 6,
  fuelLevel: 14,
  altitude: 3.5,
  speed: 7,
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97'
}
[2020-11-11T18:06:56.626] [INFO] From service realtime - Status of the booster changed : 6
[2020-11-11T18:06:56.631] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:06:56.699] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:06:56.711] [INFO] From service realtime - Status of the rocket changed : 8
[2020-11-11T18:06:56.700] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 8,
  fuelLevel: 16,
  altitude: 567,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:06:57.424] [INFO] From service front - And then the booster has landed, its status is 'Landed'
[2020-11-11T18:06:57.702] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:06:57.702] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 8,
  fuelLevel: 15,
  altitude: 574,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:06:57.714] [INFO] From service realtime - Status of the rocket changed : 8
[2020-11-11T18:06:58.669] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:06:58.671] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 8,
  fuelLevel: 14,
  altitude: 581,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:06:58.683] [INFO] From service realtime - Status of the rocket changed : 8
[2020-11-11T18:06:59.584] [INFO] From service booster - Booster landed
[2020-11-11T18:06:59.584] [INFO] From service booster - Booster stopped
[2020-11-11T18:06:59.592] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:06:59.593] [INFO] From service telemetry-listener - {
  boosterStatus: 6,
  fuelLevel: 13,
  altitude: -3.5,
  speed: 7,
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97'
}
[2020-11-11T18:06:59.596] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:06:59.597] [INFO] From service telemetry-listener - {
  boosterStatus: 7,
  fuelLevel: 13,
  altitude: 0,
  speed: 0,
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97'
}
[2020-11-11T18:06:59.601] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:06:59.602] [INFO] From service telemetry-listener - {
  boosterStatus: 7,
  fuelLevel: 13,
  altitude: 0,
  speed: 0,
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97'
}
[2020-11-11T18:06:59.619] [INFO] From service realtime - Status of the booster changed : 6
[2020-11-11T18:06:59.621] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:06:59.632] [INFO] From service realtime - Status of the booster changed : 7
[2020-11-11T18:06:59.633] [INFO] From service realtime - Status of the booster changed : 7
[2020-11-11T18:06:59.638] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:06:59.638] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:06:59.668] [INFO] From service rocket - Initializing fairing separation.
[2020-11-11T18:06:59.669] [INFO] From service rocket - Fairing separation is a success!
[2020-11-11T18:06:59.673] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:06:59.674] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 8,
  fuelLevel: 13,
  altitude: 588,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:06:59.678] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:06:59.678] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 9,
  fuelLevel: 13,
  altitude: 588,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:06:59.696] [INFO] From service realtime - Status of the rocket changed : 8
[2020-11-11T18:06:59.712] [INFO] From service realtime - Status of the rocket changed : 9
[2020-11-11T18:07:00.406] [INFO] From service front - And then the rocket status is 'Fairing separation'
[2020-11-11T18:07:00.675] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:07:00.675] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 9,
  fuelLevel: 12,
  altitude: 588,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:07:00.690] [INFO] From service realtime - Status of the rocket changed : 9
[2020-11-11T18:07:01.415] [INFO] From service front - When the rocket has no more fuel
[2020-11-11T18:07:01.682] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:07:01.683] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 9,
  fuelLevel: 11,
  altitude: 588,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:07:01.695] [INFO] From service realtime - Status of the rocket changed : 9
[2020-11-11T18:07:01.919] [INFO] From service front - Then the rocket status is 'Second engine cut-off'
[2020-11-11T18:07:02.686] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:07:02.686] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 9,
  fuelLevel: 10,
  altitude: 588,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:07:02.708] [INFO] From service realtime - Status of the rocket changed : 9
[2020-11-11T18:07:03.678] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:07:03.679] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 9,
  fuelLevel: 9,
  altitude: 588,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:07:03.688] [INFO] From service realtime - Status of the rocket changed : 9
[2020-11-11T18:07:04.679] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:07:04.679] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 9,
  fuelLevel: 8,
  altitude: 588,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:07:04.695] [INFO] From service realtime - Status of the rocket changed : 9
[2020-11-11T18:07:05.682] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:07:05.685] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 9,
  fuelLevel: 7,
  altitude: 588,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:07:05.690] [INFO] From service realtime - Status of the rocket changed : 9
[2020-11-11T18:07:06.683] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:07:06.684] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 9,
  fuelLevel: 6,
  altitude: 588,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:07:06.694] [INFO] From service realtime - Status of the rocket changed : 9
[2020-11-11T18:07:07.688] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:07:07.689] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 9,
  fuelLevel: 5,
  altitude: 588,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:07:07.705] [INFO] From service realtime - Status of the rocket changed : 9
[2020-11-11T18:07:08.688] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:07:08.688] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 9,
  fuelLevel: 4,
  altitude: 588,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:07:08.699] [INFO] From service realtime - Status of the rocket changed : 9
[2020-11-11T18:07:09.692] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:07:09.693] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 9,
  fuelLevel: 3,
  altitude: 588,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:07:09.699] [INFO] From service realtime - Status of the rocket changed : 9
[2020-11-11T18:07:10.695] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:07:10.696] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 9,
  fuelLevel: 2,
  altitude: 588,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:07:10.706] [INFO] From service realtime - Status of the rocket changed : 9
[2020-11-11T18:07:11.695] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:07:11.695] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 9,
  fuelLevel: 1,
  altitude: 588,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:07:11.707] [INFO] From service realtime - Status of the rocket changed : 9
[2020-11-11T18:07:12.695] [INFO] From service rocket - Second engine cut off.
[2020-11-11T18:07:12.705] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:07:12.705] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 9,
  fuelLevel: 0,
  altitude: 588,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:07:12.709] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:07:12.709] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 10,
  fuelLevel: 0,
  altitude: 588,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:07:12.727] [INFO] From service realtime - Status of the rocket changed : 9
[2020-11-11T18:07:12.736] [INFO] From service telemetry-analyser-service - Anomaly on rocket detected ! 
[2020-11-11T18:07:12.738] [INFO] From service telemetry-analyser-service - RocketAnomalies {
  previousAltitude: 588,
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  anomalies: [ 1 ],
  newAnomaly: 1
}
[2020-11-11T18:07:12.750] [INFO] From service realtime - Status of the rocket changed : 10
[2020-11-11T18:07:12.796] [INFO] From service telemetry-listener - Payload data received : 
[2020-11-11T18:07:12.797] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  speed: 7,
  altitude: 588,
  payloadStatus: 0
}
[2020-11-11T18:07:12.804] [INFO] From service anomaly-handler-service - New anomaly detected... Checking criticality
[2020-11-11T18:07:13.458] [INFO] From service front - When Gwynn decides to deliver the payload
[2020-11-11T18:07:13.462] [INFO] From service front - Then the rocket status is now 'Payload delivered!'
[2020-11-11T18:07:13.495] [INFO] From service payload - Detaching Payload...
[2020-11-11T18:07:13.497] [INFO] From service payload - Progressing to orbital position...
[2020-11-11T18:07:13.509] [INFO] From service telemetry-listener - Payload data received : 
[2020-11-11T18:07:13.513] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  speed: 7,
  altitude: 588,
  payloadStatus: 1
}
[2020-11-11T18:07:13.520] [INFO] From service realtime - Status of the rocket changed : 11
[2020-11-11T18:07:14.478] [INFO] From service front - Given three missions which have passed all required controls before the launch procedure
[2020-11-11T18:07:14.484] [INFO] From service missions-coordinator - Creating mission : 9a902ef4-7ef6-4ba9-813e-c395f7b81187
[2020-11-11T18:07:14.484] [INFO] From service missions-coordinator - Initialize HeadStages...
[2020-11-11T18:07:14.484] [INFO] From service missions-coordinator - Initialize Payload...
[2020-11-11T18:07:14.484] [INFO] From service missions-coordinator - Initialize Booster...
[2020-11-11T18:07:14.499] [INFO] From service front - And the rocket has been launched for each mission
[2020-11-11T18:07:14.485] [INFO] From service missions-coordinator - Initialize RealTime...
[2020-11-11T18:07:14.506] [INFO] From service mission - Creating new mission : 9a902ef4-7ef6-4ba9-813e-c395f7b81187
[2020-11-11T18:07:14.508] [INFO] From service poll - poll : 9a902ef4-7ef6-4ba9-813e-c395f7b81187 created
[2020-11-11T18:07:14.485] [INFO] From service missions-coordinator - Initialize Mission...
[2020-11-11T18:07:14.500] [INFO] From service rocket - Rocket is on preparation.
[2020-11-11T18:07:14.519] [INFO] From service rocket - Rocket is on preparation.
[2020-11-11T18:07:14.524] [INFO] From service telemetry-listener - Payload data received : 
[2020-11-11T18:07:14.524] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  speed: 7,
  altitude: 581,
  payloadStatus: 1
}
[2020-11-11T18:07:14.485] [INFO] From service missions-coordinator - Initialize Poll...
[2020-11-11T18:07:14.536] [INFO] From service poll - poll : e807e8fb-ba30-43c9-b7e4-10fcdb51a049 created
[2020-11-11T18:07:14.538] [INFO] From service mission - Creating new mission : e807e8fb-ba30-43c9-b7e4-10fcdb51a049
[2020-11-11T18:07:14.495] [INFO] From service missions-coordinator - Creating mission : e807e8fb-ba30-43c9-b7e4-10fcdb51a049
[2020-11-11T18:07:14.495] [INFO] From service missions-coordinator - Initialize HeadStages...
[2020-11-11T18:07:14.495] [INFO] From service missions-coordinator - Initialize Payload...
[2020-11-11T18:07:14.495] [INFO] From service missions-coordinator - Initialize Booster...
[2020-11-11T18:07:14.496] [INFO] From service missions-coordinator - Initialize RealTime...
[2020-11-11T18:07:14.496] [INFO] From service missions-coordinator - Initialize Mission...
[2020-11-11T18:07:14.496] [INFO] From service missions-coordinator - Initialize Poll...
[2020-11-11T18:07:14.501] [INFO] From service missions-coordinator - Payload initialized
[2020-11-11T18:07:14.502] [INFO] From service missions-coordinator - Booster initialized
[2020-11-11T18:07:14.504] [INFO] From service missions-coordinator - RealTime initialized
[2020-11-11T18:07:14.509] [INFO] From service missions-coordinator - Mission initialized
[2020-11-11T18:07:14.522] [INFO] From service missions-coordinator - Poll initialized
[2020-11-11T18:07:14.523] [INFO] From service missions-coordinator - Payload initialized
[2020-11-11T18:07:14.528] [INFO] From service missions-coordinator - Head Stage initialized
[2020-11-11T18:07:14.534] [INFO] From service missions-coordinator - Head Stage initialized
[2020-11-11T18:07:14.542] [INFO] From service missions-coordinator - RealTime initialized
[2020-11-11T18:07:14.548] [INFO] From service missions-coordinator - Mission initialized
[2020-11-11T18:07:14.548] [INFO] From service missions-coordinator - Poll initialized
[2020-11-11T18:07:14.556] [INFO] From service missions-coordinator - Booster initialized
[2020-11-11T18:07:14.604] [INFO] From service front - And the first mission has its rocket still attached to the booster
[2020-11-11T18:07:14.607] [INFO] From service front - And the second mission has already its rocket and its booster detached from each other
[2020-11-11T18:07:14.609] [INFO] From service front - And the third mission has already its rocket and its booster detached from each other
[2020-11-11T18:07:14.613] [INFO] From service front -   When the anomaly 'skyfall' which has a severity of 3 is detected in the first mission's rocket
[2020-11-11T18:07:14.616] [INFO] From service rocket - Initializing startup process.
[2020-11-11T18:07:14.634] [INFO] From service rocket - Initializing startup process.
[2020-11-11T18:07:14.667] [INFO] From service rocket - Initializing startup process.
[2020-11-11T18:07:14.683] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:07:14.683] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 2,
  fuelLevel: 0,
  altitude: 588,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:07:14.697] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:07:14.705] [INFO] From service realtime - Status of the rocket changed : 2
[2020-11-11T18:07:14.698] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 2,
  fuelLevel: 0,
  altitude: 588,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:07:14.702] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:07:14.756] [INFO] From service realtime - Status of the rocket changed : 2
[2020-11-11T18:07:14.703] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 1,
  fuelLevel: 0,
  altitude: 588,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:07:14.715] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:07:14.724] [INFO] From service telemetry-listener - {
  missionId: '9a902ef4-7ef6-4ba9-813e-c395f7b81187',
  rocketStatus: 2,
  fuelLevel: 70,
  altitude: 0,
  speed: 0,
  pressure: 0
}
[2020-11-11T18:07:14.729] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:07:14.772] [INFO] From service realtime - Status of the rocket changed : 1
[2020-11-11T18:07:14.730] [INFO] From service telemetry-listener - {
  missionId: '9a902ef4-7ef6-4ba9-813e-c395f7b81187',
  rocketStatus: 2,
  fuelLevel: 70,
  altitude: 0,
  speed: 0,
  pressure: 0
}
[2020-11-11T18:07:14.773] [INFO] From service realtime - Status of the rocket changed : 2
[2020-11-11T18:07:14.733] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:07:14.774] [INFO] From service realtime - Status of the rocket changed : 2
[2020-11-11T18:07:14.735] [INFO] From service telemetry-listener - {
  missionId: '9a902ef4-7ef6-4ba9-813e-c395f7b81187',
  rocketStatus: 1,
  fuelLevel: 70,
  altitude: 0,
  speed: 0,
  pressure: 0
}
[2020-11-11T18:07:14.755] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:07:14.756] [INFO] From service telemetry-listener - {
  missionId: 'e807e8fb-ba30-43c9-b7e4-10fcdb51a049',
  rocketStatus: 2,
  fuelLevel: 70,
  altitude: 0,
  speed: 0,
  pressure: 0
}
[2020-11-11T18:07:14.761] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:07:14.761] [INFO] From service telemetry-listener - {
  missionId: 'e807e8fb-ba30-43c9-b7e4-10fcdb51a049',
  rocketStatus: 2,
  fuelLevel: 70,
  altitude: 0,
  speed: 0,
  pressure: 0
}
[2020-11-11T18:07:14.764] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:07:14.764] [INFO] From service telemetry-listener - {
  missionId: 'e807e8fb-ba30-43c9-b7e4-10fcdb51a049',
  rocketStatus: 1,
  fuelLevel: 70,
  altitude: 0,
  speed: 0,
  pressure: 0
}
[2020-11-11T18:07:14.818] [INFO] From service realtime - Status of the rocket changed : 1
[2020-11-11T18:07:14.819] [INFO] From service realtime - Status of the rocket changed : 2
[2020-11-11T18:07:14.831] [INFO] From service realtime - Status of the rocket changed : 2
[2020-11-11T18:07:14.831] [INFO] From service realtime - Status of the rocket changed : 1
[2020-11-11T18:07:15.501] [INFO] From service telemetry-listener - Payload data received : 
[2020-11-11T18:07:15.502] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  speed: 7,
  altitude: 574,
  payloadStatus: 1
}
[2020-11-11T18:07:15.619] [INFO] From service rocket - T-10s.
[2020-11-11T18:07:15.635] [INFO] From service rocket - T-10s.
[2020-11-11T18:07:15.668] [INFO] From service rocket - T-10s.
[2020-11-11T18:07:16.503] [INFO] From service payload - Payload now into orbit!
[2020-11-11T18:07:16.505] [INFO] From service telemetry-listener - Payload data received : 
[2020-11-11T18:07:16.506] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  speed: 7,
  altitude: 567,
  payloadStatus: 1
}
[2020-11-11T18:07:16.508] [INFO] From service telemetry-listener - Payload data received : 
[2020-11-11T18:07:16.508] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  speed: 7,
  altitude: 567,
  payloadStatus: 2
}
[2020-11-11T18:07:16.618] [INFO] From service rocket - T-9s.
[2020-11-11T18:07:16.635] [INFO] From service rocket - T-9s.
[2020-11-11T18:07:16.667] [INFO] From service rocket - T-9s.
[2020-11-11T18:07:17.625] [INFO] From service rocket - T-8s.
[2020-11-11T18:07:17.635] [INFO] From service rocket - T-8s.
[2020-11-11T18:07:17.668] [INFO] From service rocket - T-8s.
[2020-11-11T18:07:18.626] [INFO] From service rocket - T-7s.
[2020-11-11T18:07:18.636] [INFO] From service rocket - T-7s.
[2020-11-11T18:07:18.669] [INFO] From service rocket - T-7s.
[2020-11-11T18:07:19.628] [INFO] From service rocket - T-6s.
[2020-11-11T18:07:19.636] [INFO] From service rocket - T-6s.
[2020-11-11T18:07:19.672] [INFO] From service rocket - T-6s.
[2020-11-11T18:07:20.630] [INFO] From service rocket - T-5s.
[2020-11-11T18:07:20.635] [INFO] From service rocket - T-5s.
[2020-11-11T18:07:20.673] [INFO] From service rocket - T-5s.
[2020-11-11T18:07:21.631] [INFO] From service rocket - T-4s.
[2020-11-11T18:07:21.632] [INFO] From service rocket - Starting main engine.
[2020-11-11T18:07:21.637] [INFO] From service rocket - T-4s.
[2020-11-11T18:07:21.648] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:07:21.658] [INFO] From service realtime - Status of the rocket changed : 2
[2020-11-11T18:07:21.637] [INFO] From service rocket - Starting main engine.
[2020-11-11T18:07:21.648] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 3,
  fuelLevel: 0,
  altitude: 588,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:07:21.652] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:07:21.652] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 3,
  fuelLevel: 0,
  altitude: 588,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:07:21.657] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:07:21.658] [INFO] From service telemetry-listener - {
  missionId: '9a902ef4-7ef6-4ba9-813e-c395f7b81187',
  rocketStatus: 3,
  fuelLevel: 70,
  altitude: 0,
  speed: 0,
  pressure: 0
}
[2020-11-11T18:07:21.661] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:07:21.661] [INFO] From service telemetry-listener - {
  missionId: '9a902ef4-7ef6-4ba9-813e-c395f7b81187',
  rocketStatus: 3,
  fuelLevel: 70,
  altitude: 0,
  speed: 0,
  pressure: 0
}
[2020-11-11T18:07:21.677] [INFO] From service rocket - T-4s.
[2020-11-11T18:07:21.678] [INFO] From service rocket - Starting main engine.
[2020-11-11T18:07:21.696] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:07:21.697] [INFO] From service telemetry-listener - {
  missionId: 'e807e8fb-ba30-43c9-b7e4-10fcdb51a049',
  rocketStatus: 3,
  fuelLevel: 70,
  altitude: 0,
  speed: 0,
  pressure: 0
}
[2020-11-11T18:07:21.702] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:07:21.710] [INFO] From service realtime - Status of the rocket changed : 3
[2020-11-11T18:07:21.702] [INFO] From service telemetry-listener - {
  missionId: 'e807e8fb-ba30-43c9-b7e4-10fcdb51a049',
  rocketStatus: 3,
  fuelLevel: 70,
  altitude: 0,
  speed: 0,
  pressure: 0
}
[2020-11-11T18:07:21.735] [INFO] From service realtime - Status of the rocket changed : 2
[2020-11-11T18:07:21.736] [INFO] From service realtime - Status of the rocket changed : 3
[2020-11-11T18:07:21.737] [INFO] From service realtime - Status of the rocket changed : 2
[2020-11-11T18:07:21.739] [INFO] From service realtime - Status of the rocket changed : 3
[2020-11-11T18:07:22.636] [INFO] From service rocket - T-3s.
[2020-11-11T18:07:22.640] [INFO] From service rocket - T-3s.
[2020-11-11T18:07:22.683] [INFO] From service rocket - T-3s.
[2020-11-11T18:07:23.636] [INFO] From service rocket - T-2s.
[2020-11-11T18:07:23.640] [INFO] From service rocket - T-2s.
[2020-11-11T18:07:23.681] [INFO] From service rocket - T-2s.
[2020-11-11T18:07:24.637] [INFO] From service rocket - T-1s.
[2020-11-11T18:07:24.638] [INFO] From service rocket - T+00:00:00.
[2020-11-11T18:07:24.639] [INFO] From service rocket - Sending launch signal to booster!
[2020-11-11T18:07:24.640] [INFO] From service rocket - T-1s.
[2020-11-11T18:07:24.640] [INFO] From service rocket - T+00:00:00.
[2020-11-11T18:07:24.640] [INFO] From service rocket - Sending launch signal to booster!
[2020-11-11T18:07:24.646] [INFO] From service booster - Launching booster
[2020-11-11T18:07:24.646] [INFO] From service booster - Booster launched
[2020-11-11T18:07:24.656] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:07:24.657] [INFO] From service telemetry-listener - {
  boosterStatus: 7,
  fuelLevel: 13,
  altitude: 0,
  speed: 0,
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97'
}
[2020-11-11T18:07:24.673] [INFO] From service rocket - Rocket has been launched!
[2020-11-11T18:07:24.680] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:07:24.682] [INFO] From service rocket - T-1s.
[2020-11-11T18:07:24.683] [INFO] From service rocket - T+00:00:00.
[2020-11-11T18:07:24.684] [INFO] From service rocket - Sending launch signal to booster!
[2020-11-11T18:07:24.685] [INFO] From service realtime - Status of the booster changed : 7
[2020-11-11T18:07:24.678] [INFO] From service booster - Launching booster
[2020-11-11T18:07:24.687] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:07:24.688] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 4,
  fuelLevel: 0,
  altitude: 588,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:07:24.678] [INFO] From service booster - Booster launched
[2020-11-11T18:07:24.699] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:07:24.699] [INFO] From service telemetry-listener - {
  boosterStatus: 0,
  fuelLevel: 65,
  altitude: 0,
  speed: 0,
  missionId: '9a902ef4-7ef6-4ba9-813e-c395f7b81187'
}
[2020-11-11T18:07:24.730] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:07:24.738] [INFO] From service realtime - Status of the rocket changed : 4
[2020-11-11T18:07:24.740] [INFO] From service booster - Launching booster
[2020-11-11T18:07:24.739] [INFO] From service realtime - Status of the booster changed : 0
[2020-11-11T18:07:24.740] [INFO] From service booster - Booster launched
[2020-11-11T18:07:24.751] [INFO] From service rocket - Rocket has been launched!
[2020-11-11T18:07:24.752] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:07:24.753] [INFO] From service telemetry-listener - {
  boosterStatus: 0,
  fuelLevel: 65,
  altitude: 0,
  speed: 0,
  missionId: 'e807e8fb-ba30-43c9-b7e4-10fcdb51a049'
}
[2020-11-11T18:07:24.757] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:07:24.757] [INFO] From service telemetry-listener - {
  missionId: '9a902ef4-7ef6-4ba9-813e-c395f7b81187',
  rocketStatus: 4,
  fuelLevel: 70,
  altitude: 0,
  speed: 0,
  pressure: 0
}
[2020-11-11T18:07:24.779] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:07:24.789] [INFO] From service realtime - Status of the booster changed : 0
[2020-11-11T18:07:24.790] [INFO] From service realtime - Status of the rocket changed : 4
[2020-11-11T18:07:24.815] [INFO] From service rocket - Rocket has been launched!
[2020-11-11T18:07:24.824] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:07:24.826] [INFO] From service telemetry-listener - {
  missionId: 'e807e8fb-ba30-43c9-b7e4-10fcdb51a049',
  rocketStatus: 4,
  fuelLevel: 70,
  altitude: 0,
  speed: 0,
  pressure: 0
}
[2020-11-11T18:07:24.837] [INFO] From service realtime - Status of the rocket changed : 4
[2020-11-11T18:07:25.680] [INFO] From service rocket - Going through MAX Q. Throttling down...
[2020-11-11T18:07:25.687] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:07:25.687] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 4,
  fuelLevel: 0,
  altitude: 595,
  speed: 7.5,
  pressure: 75
}
[2020-11-11T18:07:25.689] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:07:25.690] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 5,
  fuelLevel: 0,
  altitude: 595,
  speed: 7.5,
  pressure: 75
}
[2020-11-11T18:07:25.723] [INFO] From service realtime - Status of the rocket changed : 4
[2020-11-11T18:07:25.741] [INFO] From service realtime - Status of the rocket changed : 5
[2020-11-11T18:07:25.757] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:07:25.757] [INFO] From service telemetry-listener - {
  missionId: '9a902ef4-7ef6-4ba9-813e-c395f7b81187',
  rocketStatus: 4,
  fuelLevel: 70,
  altitude: 0,
  speed: 0.5,
  pressure: 5
}
[2020-11-11T18:07:25.773] [INFO] From service realtime - Status of the rocket changed : 4
[2020-11-11T18:07:25.785] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:07:25.786] [INFO] From service telemetry-listener - {
  boosterStatus: 0,
  fuelLevel: 65,
  altitude: 0,
  speed: 0.5,
  missionId: '9a902ef4-7ef6-4ba9-813e-c395f7b81187'
}
[2020-11-11T18:07:25.803] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:07:25.825] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:07:25.829] [INFO] From service realtime - Status of the booster changed : 0
[2020-11-11T18:07:25.825] [INFO] From service telemetry-listener - {
  missionId: 'e807e8fb-ba30-43c9-b7e4-10fcdb51a049',
  rocketStatus: 4,
  fuelLevel: 70,
  altitude: 0,
  speed: 0.5,
  pressure: 5
}
[2020-11-11T18:07:25.848] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:07:25.851] [INFO] From service telemetry-listener - {
  boosterStatus: 0,
  fuelLevel: 65,
  altitude: 0,
  speed: 0.5,
  missionId: 'e807e8fb-ba30-43c9-b7e4-10fcdb51a049'
}
[2020-11-11T18:07:25.862] [INFO] From service realtime - Status of the rocket changed : 4
[2020-11-11T18:07:25.881] [INFO] From service realtime - Status of the booster changed : 0
[2020-11-11T18:07:25.885] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:07:26.646] [INFO] From service front - Then the mission is immediately aborted which causes the head stage status to change to 'Destroyed :('
[2020-11-11T18:07:26.648] [INFO] From service rocket - Rocket is falling ...
[2020-11-11T18:07:26.648] [INFO] From service rocket - The rocket starts falling down!.
[2020-11-11T18:07:26.686] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:07:26.687] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 5,
  fuelLevel: 0,
  altitude: 602.5,
  speed: 7.5,
  pressure: 75
}
[2020-11-11T18:07:26.698] [INFO] From service realtime - Status of the rocket changed : 5
[2020-11-11T18:07:26.759] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:07:26.759] [INFO] From service telemetry-listener - {
  missionId: '9a902ef4-7ef6-4ba9-813e-c395f7b81187',
  rocketStatus: 4,
  fuelLevel: 70,
  altitude: 0.5,
  speed: 1,
  pressure: 10
}
[2020-11-11T18:07:26.771] [INFO] From service realtime - Status of the rocket changed : 4
[2020-11-11T18:07:26.775] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:07:26.776] [INFO] From service telemetry-listener - {
  boosterStatus: 0,
  fuelLevel: 65,
  altitude: 0.5,
  speed: 1,
  missionId: '9a902ef4-7ef6-4ba9-813e-c395f7b81187'
}
[2020-11-11T18:07:26.788] [INFO] From service realtime - Status of the booster changed : 0
[2020-11-11T18:07:26.799] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:07:26.822] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:07:26.822] [INFO] From service telemetry-listener - {
  missionId: 'e807e8fb-ba30-43c9-b7e4-10fcdb51a049',
  rocketStatus: 4,
  fuelLevel: 70,
  altitude: 0.5,
  speed: 1,
  pressure: 10
}
[2020-11-11T18:07:26.832] [INFO] From service realtime - Status of the rocket changed : 4
[2020-11-11T18:07:26.841] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:07:26.841] [INFO] From service telemetry-listener - {
  boosterStatus: 0,
  fuelLevel: 65,
  altitude: 0.5,
  speed: 1,
  missionId: 'e807e8fb-ba30-43c9-b7e4-10fcdb51a049'
}
[2020-11-11T18:07:26.867] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:07:26.869] [INFO] From service realtime - Status of the booster changed : 0
[2020-11-11T18:07:27.652] [INFO] From service booster - Initializing booster detachment.
[2020-11-11T18:07:27.655] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:07:27.656] [INFO] From service telemetry-listener - {
  missionId: 'e807e8fb-ba30-43c9-b7e4-10fcdb51a049',
  rocketStatus: 4,
  fuelLevel: 69,
  altitude: -0.5,
  speed: 1,
  pressure: 10
}
[2020-11-11T18:07:27.661] [INFO] From service booster - Landing booster.
[2020-11-11T18:07:27.669] [INFO] From service telemetry-analyser-service - Anomaly on rocket detected ! 
[2020-11-11T18:07:27.669] [INFO] From service telemetry-analyser-service - RocketAnomalies {
  previousAltitude: -0.5,
  missionId: 'e807e8fb-ba30-43c9-b7e4-10fcdb51a049',
  anomalies: [ 2 ],
  newAnomaly: 2
}
[2020-11-11T18:07:27.668] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:07:27.668] [INFO] From service telemetry-listener - {
  boosterStatus: 7,
  fuelLevel: 10,
  altitude: 0,
  speed: 0,
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97'
}
[2020-11-11T18:07:27.674] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:07:27.676] [INFO] From service telemetry-listener - {
  boosterStatus: 7,
  fuelLevel: 10,
  altitude: 0,
  speed: 0,
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97'
}
[2020-11-11T18:07:27.681] [INFO] From service realtime - Status of the rocket changed : 4
[2020-11-11T18:07:27.697] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:07:27.701] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 5,
  fuelLevel: 0,
  altitude: 610,
  speed: 7.5,
  pressure: 75
}
[2020-11-11T18:07:27.727] [INFO] From service realtime - Status of the booster changed : 7
[2020-11-11T18:07:27.733] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:07:27.706] [INFO] From service anomaly-handler-service - New anomaly detected... Checking criticality
[2020-11-11T18:07:27.712] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:07:27.715] [INFO] From service telemetry-listener - {
  boosterStatus: 0,
  fuelLevel: 65,
  altitude: -0.5,
  speed: 1,
  missionId: 'e807e8fb-ba30-43c9-b7e4-10fcdb51a049'
}
[2020-11-11T18:07:27.754] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:07:27.706] [INFO] From service anomaly-handler-service - Anomaly critical, destruction of the rocket
[2020-11-11T18:07:27.772] [INFO] From service realtime - Status of the booster changed : 7
[2020-11-11T18:07:27.756] [INFO] From service telemetry-listener - {
  boosterStatus: 0,
  fuelLevel: 62,
  altitude: 0.5,
  speed: 1,
  missionId: '9a902ef4-7ef6-4ba9-813e-c395f7b81187'
}
[2020-11-11T18:07:27.764] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:07:27.765] [INFO] From service telemetry-listener - {
  boosterStatus: 0,
  fuelLevel: 62,
  altitude: -0.5,
  speed: 1,
  missionId: 'e807e8fb-ba30-43c9-b7e4-10fcdb51a049'
}
[2020-11-11T18:07:27.774] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:07:27.775] [INFO] From service telemetry-listener - {
  missionId: '9a902ef4-7ef6-4ba9-813e-c395f7b81187',
  rocketStatus: 4,
  fuelLevel: 70,
  altitude: 1.5,
  speed: 1.5,
  pressure: 15
}
[2020-11-11T18:07:27.782] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:07:27.782] [INFO] From service telemetry-listener - {
  boosterStatus: 0,
  fuelLevel: 62,
  altitude: 1.5,
  speed: 1.5,
  missionId: '9a902ef4-7ef6-4ba9-813e-c395f7b81187'
}
[2020-11-11T18:07:27.812] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:07:27.812] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:07:27.822] [INFO] From service realtime - Status of the rocket changed : 5
[2020-11-11T18:07:27.823] [INFO] From service realtime - Status of the booster changed : 0
[2020-11-11T18:07:27.825] [INFO] From service realtime - Status of the booster changed : 0
[2020-11-11T18:07:27.840] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:07:27.841] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:07:27.867] [INFO] From service realtime - Status of the booster changed : 0
[2020-11-11T18:07:27.871] [INFO] From service realtime - Status of the booster changed : 0
[2020-11-11T18:07:27.872] [INFO] From service realtime - Status of the rocket changed : 4
[2020-11-11T18:07:27.879] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:07:27.893] [INFO] From service rocket - *BOOM!* - Rocket destroyed!
[2020-11-11T18:07:27.909] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:07:27.909] [INFO] From service telemetry-listener - {
  missionId: 'e807e8fb-ba30-43c9-b7e4-10fcdb51a049',
  rocketStatus: 99,
  fuelLevel: 69,
  altitude: -0.5,
  speed: 1,
  pressure: 10
}
[2020-11-11T18:07:27.920] [INFO] From service realtime - Status of the rocket changed : 99
[2020-11-11T18:07:27.922] [INFO] From service booster - *BOOM!* - Booster destroyed!
[2020-11-11T18:07:27.927] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:07:27.927] [INFO] From service telemetry-listener - {
  boosterStatus: 8,
  fuelLevel: 62,
  altitude: -0.5,
  speed: 1,
  missionId: 'e807e8fb-ba30-43c9-b7e4-10fcdb51a049'
}
[2020-11-11T18:07:27.944] [INFO] From service rocket - *BOOM!* - Rocket destroyed!
[2020-11-11T18:07:27.947] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:07:27.948] [INFO] From service telemetry-listener - {
  missionId: 'e807e8fb-ba30-43c9-b7e4-10fcdb51a049',
  rocketStatus: 99,
  fuelLevel: 69,
  altitude: -0.5,
  speed: 1,
  pressure: 10
}
[2020-11-11T18:07:27.926] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:07:27.926] [INFO] From service realtime - Status of the booster changed : 8
[2020-11-11T18:07:27.944] [INFO] From service realtime - Status of the rocket changed : 99
[2020-11-11T18:07:28.654] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:07:28.654] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 5,
  fuelLevel: 0,
  altitude: 617.5,
  speed: 7.5,
  pressure: 75
}
[2020-11-11T18:07:28.670] [INFO] From service realtime - Status of the rocket changed : 5
[2020-11-11T18:07:28.724] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:07:28.725] [INFO] From service telemetry-listener - {
  missionId: '9a902ef4-7ef6-4ba9-813e-c395f7b81187',
  rocketStatus: 4,
  fuelLevel: 70,
  altitude: 3,
  speed: 2,
  pressure: 20
}
[2020-11-11T18:07:28.743] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:07:28.743] [INFO] From service telemetry-listener - {
  boosterStatus: 0,
  fuelLevel: 62,
  altitude: 3,
  speed: 2,
  missionId: '9a902ef4-7ef6-4ba9-813e-c395f7b81187'
}
[2020-11-11T18:07:28.756] [INFO] From service realtime - Status of the rocket changed : 4
[2020-11-11T18:07:28.776] [INFO] From service realtime - Status of the booster changed : 0
[2020-11-11T18:07:28.775] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:07:29.628] [INFO] From service front - And the booster is immediatly 'Destroyed :('
[2020-11-11T18:07:29.656] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:07:29.656] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 5,
  fuelLevel: 0,
  altitude: 625,
  speed: 7.5,
  pressure: 75
}
[2020-11-11T18:07:29.663] [INFO] From service realtime - Status of the rocket changed : 5
[2020-11-11T18:07:29.730] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:07:29.730] [INFO] From service telemetry-listener - {
  missionId: '9a902ef4-7ef6-4ba9-813e-c395f7b81187',
  rocketStatus: 4,
  fuelLevel: 70,
  altitude: 5,
  speed: 2.5,
  pressure: 25
}
[2020-11-11T18:07:29.742] [INFO] From service realtime - Status of the rocket changed : 4
[2020-11-11T18:07:29.744] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:07:29.744] [INFO] From service telemetry-listener - {
  boosterStatus: 0,
  fuelLevel: 62,
  altitude: 5,
  speed: 2.5,
  missionId: '9a902ef4-7ef6-4ba9-813e-c395f7b81187'
}
[2020-11-11T18:07:29.766] [INFO] From service realtime - Status of the booster changed : 0
[2020-11-11T18:07:29.771] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:07:30.631] [INFO] From service booster - Booster landed
[2020-11-11T18:07:30.632] [INFO] From service booster - Booster stopped
[2020-11-11T18:07:30.643] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:07:30.646] [INFO] From service rocket - Main engine cut off.
[2020-11-11T18:07:30.646] [INFO] From service rocket - Booster detached.
[2020-11-11T18:07:30.643] [INFO] From service telemetry-listener - {
  boosterStatus: 1,
  fuelLevel: 9,
  altitude: 0,
  speed: 2,
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97'
}
[2020-11-11T18:07:30.646] [INFO] From service rocket - Rocket engines started.
[2020-11-11T18:07:30.645] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:07:30.645] [INFO] From service telemetry-listener - {
  boosterStatus: 7,
  fuelLevel: 9,
  altitude: 0,
  speed: 0,
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97'
}
[2020-11-11T18:07:30.668] [INFO] From service realtime - Status of the booster changed : 1
[2020-11-11T18:07:30.656] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:07:30.656] [INFO] From service telemetry-listener - {
  boosterStatus: 7,
  fuelLevel: 9,
  altitude: 0,
  speed: 0,
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97'
}
[2020-11-11T18:07:30.665] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:07:30.665] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 6,
  fuelLevel: 0,
  altitude: 628.75,
  speed: 7.5,
  pressure: 75
}
[2020-11-11T18:07:30.670] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:07:30.671] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 6,
  fuelLevel: 0,
  altitude: 628.75,
  speed: 7.5,
  pressure: 75
}
[2020-11-11T18:07:30.677] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:07:30.677] [INFO] From service telemetry-listener - {
  boosterStatus: 0,
  fuelLevel: 59,
  altitude: 5,
  speed: 2.5,
  missionId: '9a902ef4-7ef6-4ba9-813e-c395f7b81187'
}
[2020-11-11T18:07:30.684] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:07:30.684] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 6,
  fuelLevel: 0,
  altitude: 636.25,
  speed: 7.5,
  pressure: 75
}
[2020-11-11T18:07:30.711] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:07:30.716] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:07:30.718] [INFO] From service telemetry-listener - {
  boosterStatus: 8,
  fuelLevel: 59,
  altitude: -0.5,
  speed: 1,
  missionId: 'e807e8fb-ba30-43c9-b7e4-10fcdb51a049'
}
[2020-11-11T18:07:30.731] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:07:30.736] [INFO] From service realtime - Status of the booster changed : 7
[2020-11-11T18:07:30.732] [INFO] From service telemetry-listener - {
  missionId: '9a902ef4-7ef6-4ba9-813e-c395f7b81187',
  rocketStatus: 4,
  fuelLevel: 70,
  altitude: 7.5,
  speed: 3,
  pressure: 30
}
[2020-11-11T18:07:30.737] [INFO] From service realtime - Status of the booster changed : 7
[2020-11-11T18:07:30.746] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:07:30.746] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:07:30.764] [INFO] From service realtime - Status of the rocket changed : 6
[2020-11-11T18:07:30.763] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:07:30.764] [INFO] From service telemetry-listener - {
  boosterStatus: 0,
  fuelLevel: 59,
  altitude: 7.5,
  speed: 3,
  missionId: '9a902ef4-7ef6-4ba9-813e-c395f7b81187'
}
[2020-11-11T18:07:30.765] [INFO] From service realtime - Status of the rocket changed : 6
[2020-11-11T18:07:30.766] [INFO] From service realtime - Status of the rocket changed : 6
[2020-11-11T18:07:30.767] [INFO] From service realtime - Status of the booster changed : 0
[2020-11-11T18:07:30.783] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:07:30.802] [INFO] From service realtime - Status of the rocket changed : 4
[2020-11-11T18:07:30.805] [INFO] From service realtime - Status of the booster changed : 8
[2020-11-11T18:07:30.818] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:07:30.818] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:07:30.824] [INFO] From service realtime - Status of the booster changed : 0
[2020-11-11T18:07:31.635] [INFO] From service front - When the anomaly 'skyfall' which has a severity of 3 is detected in the second mission's rocket
[2020-11-11T18:07:31.730] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:07:31.730] [INFO] From service telemetry-listener - {
  missionId: '9a902ef4-7ef6-4ba9-813e-c395f7b81187',
  rocketStatus: 4,
  fuelLevel: 70,
  altitude: 10.5,
  speed: 3.5,
  pressure: 35
}
[2020-11-11T18:07:31.737] [INFO] From service realtime - Status of the rocket changed : 4
[2020-11-11T18:07:31.740] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:07:31.740] [INFO] From service telemetry-listener - {
  boosterStatus: 0,
  fuelLevel: 59,
  altitude: 10.5,
  speed: 3.5,
  missionId: '9a902ef4-7ef6-4ba9-813e-c395f7b81187'
}
[2020-11-11T18:07:31.768] [INFO] From service realtime - Status of the booster changed : 0
[2020-11-11T18:07:31.770] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:07:32.745] [INFO] From service realtime - Status of the rocket changed : 4
[2020-11-11T18:07:32.743] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:07:32.745] [INFO] From service telemetry-listener - {
  missionId: '9a902ef4-7ef6-4ba9-813e-c395f7b81187',
  rocketStatus: 4,
  fuelLevel: 70,
  altitude: 14,
  speed: 4,
  pressure: 40
}
[2020-11-11T18:07:32.749] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:07:32.749] [INFO] From service telemetry-listener - {
  boosterStatus: 0,
  fuelLevel: 59,
  altitude: 14,
  speed: 4,
  missionId: '9a902ef4-7ef6-4ba9-813e-c395f7b81187'
}
[2020-11-11T18:07:32.763] [INFO] From service realtime - Status of the booster changed : 0
[2020-11-11T18:07:32.769] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:07:33.647] [INFO] From service rocket - Booster detached.
[2020-11-11T18:07:33.647] [INFO] From service rocket - Rocket engines started.
[2020-11-11T18:07:33.650] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:07:33.650] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 7,
  fuelLevel: 0,
  altitude: 640,
  speed: 7.5,
  pressure: 75
}
[2020-11-11T18:07:33.655] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:07:33.655] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 7,
  fuelLevel: 0,
  altitude: 640,
  speed: 7.5,
  pressure: 75
}
[2020-11-11T18:07:33.667] [INFO] From service realtime - Status of the rocket changed : 7
[2020-11-11T18:07:33.669] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:07:33.670] [INFO] From service telemetry-listener - {
  boosterStatus: 0,
  fuelLevel: 56,
  altitude: 14,
  speed: 4,
  missionId: '9a902ef4-7ef6-4ba9-813e-c395f7b81187'
}
[2020-11-11T18:07:33.709] [INFO] From service realtime - Status of the rocket changed : 7
[2020-11-11T18:07:33.721] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:07:33.724] [INFO] From service realtime - Status of the booster changed : 0
[2020-11-11T18:07:33.740] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:07:33.740] [INFO] From service telemetry-listener - {
  missionId: '9a902ef4-7ef6-4ba9-813e-c395f7b81187',
  rocketStatus: 4,
  fuelLevel: 70,
  altitude: 18,
  speed: 4.5,
  pressure: 45
}
[2020-11-11T18:07:33.760] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:07:33.765] [INFO] From service realtime - Status of the rocket changed : 4
[2020-11-11T18:07:33.761] [INFO] From service telemetry-listener - {
  boosterStatus: 0,
  fuelLevel: 56,
  altitude: 18,
  speed: 4.5,
  missionId: '9a902ef4-7ef6-4ba9-813e-c395f7b81187'
}
[2020-11-11T18:07:33.790] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:07:33.799] [INFO] From service realtime - Status of the booster changed : 0
[2020-11-11T18:07:34.732] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:07:34.732] [INFO] From service telemetry-listener - {
  missionId: '9a902ef4-7ef6-4ba9-813e-c395f7b81187',
  rocketStatus: 4,
  fuelLevel: 70,
  altitude: 22.5,
  speed: 5,
  pressure: 50
}
[2020-11-11T18:07:34.743] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:07:34.743] [INFO] From service telemetry-listener - {
  boosterStatus: 0,
  fuelLevel: 56,
  altitude: 22.5,
  speed: 5,
  missionId: '9a902ef4-7ef6-4ba9-813e-c395f7b81187'
}
[2020-11-11T18:07:34.760] [INFO] From service realtime - Status of the rocket changed : 4
[2020-11-11T18:07:34.778] [INFO] From service realtime - Status of the booster changed : 0
[2020-11-11T18:07:34.780] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:07:35.737] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:07:35.738] [INFO] From service telemetry-listener - {
  missionId: '9a902ef4-7ef6-4ba9-813e-c395f7b81187',
  rocketStatus: 4,
  fuelLevel: 70,
  altitude: 27.5,
  speed: 5.5,
  pressure: 55
}
[2020-11-11T18:07:35.744] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:07:35.744] [INFO] From service telemetry-listener - {
  boosterStatus: 0,
  fuelLevel: 56,
  altitude: 27.5,
  speed: 5.5,
  missionId: '9a902ef4-7ef6-4ba9-813e-c395f7b81187'
}
[2020-11-11T18:07:35.760] [INFO] From service realtime - Status of the rocket changed : 4
[2020-11-11T18:07:35.774] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:07:35.781] [INFO] From service realtime - Status of the booster changed : 0
[2020-11-11T18:07:36.648] [INFO] From service rocket - Rocket engines started.
[2020-11-11T18:07:36.652] [INFO] From service rocket - Second stage of flight initialized.
[2020-11-11T18:07:36.654] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:07:36.654] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 8,
  fuelLevel: 0,
  altitude: 643.75,
  speed: 7.5,
  pressure: 75
}
[2020-11-11T18:07:36.656] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:07:36.656] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 8,
  fuelLevel: 0,
  altitude: 643.75,
  speed: 7.5,
  pressure: 75
}
[2020-11-11T18:07:36.665] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:07:36.665] [INFO] From service telemetry-listener - {
  boosterStatus: 0,
  fuelLevel: 53,
  altitude: 27.5,
  speed: 5.5,
  missionId: '9a902ef4-7ef6-4ba9-813e-c395f7b81187'
}
[2020-11-11T18:07:36.674] [INFO] From service realtime - Status of the rocket changed : 8
[2020-11-11T18:07:36.695] [INFO] From service realtime - Status of the booster changed : 0
[2020-11-11T18:07:36.696] [INFO] From service realtime - Status of the rocket changed : 8
[2020-11-11T18:07:36.698] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:07:36.742] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:07:36.744] [INFO] From service telemetry-listener - {
  missionId: '9a902ef4-7ef6-4ba9-813e-c395f7b81187',
  rocketStatus: 4,
  fuelLevel: 70,
  altitude: 33,
  speed: 6,
  pressure: 60
}
[2020-11-11T18:07:36.748] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:07:36.749] [INFO] From service telemetry-listener - {
  boosterStatus: 0,
  fuelLevel: 53,
  altitude: 33,
  speed: 6,
  missionId: '9a902ef4-7ef6-4ba9-813e-c395f7b81187'
}
[2020-11-11T18:07:36.757] [INFO] From service realtime - Status of the rocket changed : 4
[2020-11-11T18:07:36.771] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:07:36.774] [INFO] From service realtime - Status of the booster changed : 0
[2020-11-11T18:07:37.655] [INFO] From service rocket - Initializing fairing separation.
[2020-11-11T18:07:37.656] [INFO] From service rocket - Fairing separation is a success!
[2020-11-11T18:07:37.661] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:07:37.662] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 8,
  fuelLevel: -1,
  altitude: 651.25,
  speed: 7.5,
  pressure: 75
}
[2020-11-11T18:07:37.666] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:07:37.667] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 9,
  fuelLevel: -1,
  altitude: 651.25,
  speed: 7.5,
  pressure: 75
}
[2020-11-11T18:07:37.678] [INFO] From service realtime - Status of the rocket changed : 8
[2020-11-11T18:07:37.699] [INFO] From service realtime - Status of the rocket changed : 9
[2020-11-11T18:07:37.740] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:07:37.741] [INFO] From service telemetry-listener - {
  missionId: '9a902ef4-7ef6-4ba9-813e-c395f7b81187',
  rocketStatus: 4,
  fuelLevel: 70,
  altitude: 39,
  speed: 6.5,
  pressure: 65
}
[2020-11-11T18:07:37.751] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:07:37.751] [INFO] From service telemetry-listener - {
  boosterStatus: 0,
  fuelLevel: 53,
  altitude: 39,
  speed: 6.5,
  missionId: '9a902ef4-7ef6-4ba9-813e-c395f7b81187'
}
[2020-11-11T18:07:37.760] [INFO] From service realtime - Status of the rocket changed : 4
[2020-11-11T18:07:37.765] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:07:37.780] [INFO] From service realtime - Status of the booster changed : 0
[2020-11-11T18:07:38.660] [INFO] From service rocket - Second engine cut off.
[2020-11-11T18:07:38.672] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:07:38.673] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 9,
  fuelLevel: -2,
  altitude: 651.25,
  speed: 7.5,
  pressure: 75
}
[2020-11-11T18:07:38.676] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:07:38.676] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  rocketStatus: 10,
  fuelLevel: -2,
  altitude: 651.25,
  speed: 7.5,
  pressure: 75
}
[2020-11-11T18:07:38.689] [INFO] From service realtime - Status of the rocket changed : 9
[2020-11-11T18:07:38.682] [INFO] From service telemetry-listener - Payload data received : 
[2020-11-11T18:07:38.682] [INFO] From service telemetry-listener - {
  missionId: '1f2f478f-3684-481c-ba32-708c2be65d97',
  speed: 7.5,
  altitude: 651.25,
  payloadStatus: 2
}
[2020-11-11T18:07:38.709] [INFO] From service realtime - Status of the rocket changed : 10
[2020-11-11T18:07:38.736] [INFO] From service rocket - Going through MAX Q. Throttling down...
[2020-11-11T18:07:38.741] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:07:38.742] [INFO] From service telemetry-listener - {
  missionId: '9a902ef4-7ef6-4ba9-813e-c395f7b81187',
  rocketStatus: 4,
  fuelLevel: 70,
  altitude: 45.5,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:07:38.746] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:07:38.747] [INFO] From service telemetry-listener - {
  missionId: '9a902ef4-7ef6-4ba9-813e-c395f7b81187',
  rocketStatus: 5,
  fuelLevel: 70,
  altitude: 45.5,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:07:38.761] [INFO] From service realtime - Status of the rocket changed : 4
[2020-11-11T18:07:38.768] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:07:38.772] [INFO] From service telemetry-listener - {
  boosterStatus: 0,
  fuelLevel: 53,
  altitude: 45.5,
  speed: 7,
  missionId: '9a902ef4-7ef6-4ba9-813e-c395f7b81187'
}
[2020-11-11T18:07:38.794] [INFO] From service realtime - Status of the rocket changed : 5
[2020-11-11T18:07:38.811] [INFO] From service realtime - Status of the booster changed : 0
[2020-11-11T18:07:38.815] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:07:39.665] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:07:39.668] [INFO] From service telemetry-listener - {
  boosterStatus: 0,
  fuelLevel: 50,
  altitude: 45.5,
  speed: 7,
  missionId: '9a902ef4-7ef6-4ba9-813e-c395f7b81187'
}
[2020-11-11T18:07:39.680] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:07:39.682] [INFO] From service realtime - Status of the booster changed : 0
[2020-11-11T18:07:39.742] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:07:39.743] [INFO] From service telemetry-listener - {
  missionId: '9a902ef4-7ef6-4ba9-813e-c395f7b81187',
  rocketStatus: 5,
  fuelLevel: 70,
  altitude: 52.5,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:07:39.755] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:07:39.756] [INFO] From service telemetry-listener - {
  boosterStatus: 0,
  fuelLevel: 50,
  altitude: 52.5,
  speed: 7,
  missionId: '9a902ef4-7ef6-4ba9-813e-c395f7b81187'
}
[2020-11-11T18:07:39.766] [INFO] From service realtime - Status of the rocket changed : 5
[2020-11-11T18:07:39.781] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:07:39.785] [INFO] From service realtime - Status of the booster changed : 0
[2020-11-11T18:07:40.745] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:07:40.745] [INFO] From service telemetry-listener - {
  missionId: '9a902ef4-7ef6-4ba9-813e-c395f7b81187',
  rocketStatus: 5,
  fuelLevel: 70,
  altitude: 59.5,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:07:40.755] [INFO] From service realtime - Status of the rocket changed : 5
[2020-11-11T18:07:40.767] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:07:40.767] [INFO] From service telemetry-listener - {
  boosterStatus: 0,
  fuelLevel: 50,
  altitude: 59.5,
  speed: 7,
  missionId: '9a902ef4-7ef6-4ba9-813e-c395f7b81187'
}
[2020-11-11T18:07:40.786] [INFO] From service realtime - Status of the booster changed : 0
[2020-11-11T18:07:40.791] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:07:41.747] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:07:41.748] [INFO] From service telemetry-listener - {
  missionId: '9a902ef4-7ef6-4ba9-813e-c395f7b81187',
  rocketStatus: 5,
  fuelLevel: 70,
  altitude: 66.5,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:07:41.757] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:07:41.759] [INFO] From service telemetry-listener - {
  boosterStatus: 0,
  fuelLevel: 50,
  altitude: 66.5,
  speed: 7,
  missionId: '9a902ef4-7ef6-4ba9-813e-c395f7b81187'
}
[2020-11-11T18:07:41.769] [INFO] From service realtime - Status of the rocket changed : 5
[2020-11-11T18:07:41.786] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:07:41.789] [INFO] From service realtime - Status of the booster changed : 0
[2020-11-11T18:07:42.668] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:07:42.668] [INFO] From service telemetry-listener - {
  boosterStatus: 0,
  fuelLevel: 47,
  altitude: 66.5,
  speed: 7,
  missionId: '9a902ef4-7ef6-4ba9-813e-c395f7b81187'
}
[2020-11-11T18:07:42.680] [INFO] From service realtime - Status of the booster changed : 0
[2020-11-11T18:07:42.685] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:07:42.746] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:07:42.747] [INFO] From service telemetry-listener - {
  missionId: '9a902ef4-7ef6-4ba9-813e-c395f7b81187',
  rocketStatus: 5,
  fuelLevel: 70,
  altitude: 73.5,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:07:42.759] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:07:42.759] [INFO] From service telemetry-listener - {
  boosterStatus: 0,
  fuelLevel: 47,
  altitude: 73.5,
  speed: 7,
  missionId: '9a902ef4-7ef6-4ba9-813e-c395f7b81187'
}
[2020-11-11T18:07:42.767] [INFO] From service realtime - Status of the rocket changed : 5
[2020-11-11T18:07:42.784] [INFO] From service realtime - Status of the booster changed : 0
[2020-11-11T18:07:42.783] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:07:43.750] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:07:43.750] [INFO] From service telemetry-listener - {
  missionId: '9a902ef4-7ef6-4ba9-813e-c395f7b81187',
  rocketStatus: 5,
  fuelLevel: 70,
  altitude: 80.5,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:07:43.760] [INFO] From service realtime - Status of the rocket changed : 5
[2020-11-11T18:07:43.764] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:07:43.766] [INFO] From service telemetry-listener - {
  boosterStatus: 0,
  fuelLevel: 47,
  altitude: 80.5,
  speed: 7,
  missionId: '9a902ef4-7ef6-4ba9-813e-c395f7b81187'
}
[2020-11-11T18:07:43.779] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:07:43.786] [INFO] From service realtime - Status of the booster changed : 0
[2020-11-11T18:07:44.754] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:07:44.755] [INFO] From service telemetry-listener - {
  missionId: '9a902ef4-7ef6-4ba9-813e-c395f7b81187',
  rocketStatus: 5,
  fuelLevel: 70,
  altitude: 87.5,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:07:44.765] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:07:44.765] [INFO] From service telemetry-listener - {
  boosterStatus: 0,
  fuelLevel: 47,
  altitude: 87.5,
  speed: 7,
  missionId: '9a902ef4-7ef6-4ba9-813e-c395f7b81187'
}
[2020-11-11T18:07:44.781] [INFO] From service realtime - Status of the rocket changed : 5
[2020-11-11T18:07:44.785] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:07:44.793] [INFO] From service realtime - Status of the booster changed : 0
[2020-11-11T18:07:45.676] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:07:45.677] [INFO] From service telemetry-listener - {
  boosterStatus: 0,
  fuelLevel: 44,
  altitude: 87.5,
  speed: 7,
  missionId: '9a902ef4-7ef6-4ba9-813e-c395f7b81187'
}
[2020-11-11T18:07:45.683] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:07:45.691] [INFO] From service realtime - Status of the booster changed : 0
[2020-11-11T18:07:45.763] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:07:45.763] [INFO] From service telemetry-listener - {
  missionId: '9a902ef4-7ef6-4ba9-813e-c395f7b81187',
  rocketStatus: 5,
  fuelLevel: 70,
  altitude: 94.5,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:07:45.770] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:07:45.771] [INFO] From service telemetry-listener - {
  boosterStatus: 0,
  fuelLevel: 44,
  altitude: 94.5,
  speed: 7,
  missionId: '9a902ef4-7ef6-4ba9-813e-c395f7b81187'
}
[2020-11-11T18:07:45.785] [INFO] From service realtime - Status of the rocket changed : 5
[2020-11-11T18:07:45.797] [INFO] From service realtime - Status of the booster changed : 0
[2020-11-11T18:07:45.802] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:07:46.767] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:07:46.768] [INFO] From service telemetry-listener - {
  missionId: '9a902ef4-7ef6-4ba9-813e-c395f7b81187',
  rocketStatus: 5,
  fuelLevel: 70,
  altitude: 101.5,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:07:46.772] [INFO] From service realtime - Status of the rocket changed : 5
[2020-11-11T18:07:46.780] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:07:46.781] [INFO] From service telemetry-listener - {
  boosterStatus: 0,
  fuelLevel: 44,
  altitude: 101.5,
  speed: 7,
  missionId: '9a902ef4-7ef6-4ba9-813e-c395f7b81187'
}
[2020-11-11T18:07:46.801] [INFO] From service realtime - Status of the booster changed : 0
[2020-11-11T18:07:46.804] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:07:47.765] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:07:47.767] [INFO] From service telemetry-listener - {
  missionId: '9a902ef4-7ef6-4ba9-813e-c395f7b81187',
  rocketStatus: 5,
  fuelLevel: 70,
  altitude: 108.5,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:07:47.773] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:07:47.773] [INFO] From service telemetry-listener - {
  boosterStatus: 0,
  fuelLevel: 44,
  altitude: 108.5,
  speed: 7,
  missionId: '9a902ef4-7ef6-4ba9-813e-c395f7b81187'
}
[2020-11-11T18:07:47.788] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:07:47.792] [INFO] From service realtime - Status of the rocket changed : 5
[2020-11-11T18:07:47.806] [INFO] From service realtime - Status of the booster changed : 0
[2020-11-11T18:07:48.679] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:07:48.679] [INFO] From service telemetry-listener - {
  boosterStatus: 0,
  fuelLevel: 41,
  altitude: 108.5,
  speed: 7,
  missionId: '9a902ef4-7ef6-4ba9-813e-c395f7b81187'
}
[2020-11-11T18:07:48.692] [INFO] From service realtime - Status of the booster changed : 0
[2020-11-11T18:07:48.695] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:07:48.766] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:07:48.766] [INFO] From service telemetry-listener - {
  missionId: '9a902ef4-7ef6-4ba9-813e-c395f7b81187',
  rocketStatus: 5,
  fuelLevel: 70,
  altitude: 115.5,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:07:48.780] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:07:48.780] [INFO] From service telemetry-listener - {
  boosterStatus: 0,
  fuelLevel: 41,
  altitude: 115.5,
  speed: 7,
  missionId: '9a902ef4-7ef6-4ba9-813e-c395f7b81187'
}
[2020-11-11T18:07:48.794] [INFO] From service realtime - Status of the rocket changed : 5
[2020-11-11T18:07:48.808] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:07:48.809] [INFO] From service realtime - Status of the booster changed : 0
[2020-11-11T18:07:49.768] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:07:49.768] [INFO] From service telemetry-listener - {
  missionId: '9a902ef4-7ef6-4ba9-813e-c395f7b81187',
  rocketStatus: 5,
  fuelLevel: 70,
  altitude: 122.5,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:07:49.781] [INFO] From service realtime - Status of the rocket changed : 5
[2020-11-11T18:07:49.777] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:07:49.777] [INFO] From service telemetry-listener - {
  boosterStatus: 0,
  fuelLevel: 41,
  altitude: 122.5,
  speed: 7,
  missionId: '9a902ef4-7ef6-4ba9-813e-c395f7b81187'
}
[2020-11-11T18:07:49.794] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:07:49.804] [INFO] From service realtime - Status of the booster changed : 0
[2020-11-11T18:07:50.771] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:07:50.772] [INFO] From service telemetry-listener - {
  missionId: '9a902ef4-7ef6-4ba9-813e-c395f7b81187',
  rocketStatus: 5,
  fuelLevel: 70,
  altitude: 129.5,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:07:50.780] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:07:50.781] [INFO] From service telemetry-listener - {
  boosterStatus: 0,
  fuelLevel: 41,
  altitude: 129.5,
  speed: 7,
  missionId: '9a902ef4-7ef6-4ba9-813e-c395f7b81187'
}
[2020-11-11T18:07:50.790] [INFO] From service realtime - Status of the rocket changed : 5
[2020-11-11T18:07:50.811] [INFO] From service realtime - Status of the booster changed : 0
[2020-11-11T18:07:50.817] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:07:51.682] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:07:51.683] [INFO] From service telemetry-listener - {
  boosterStatus: 0,
  fuelLevel: 38,
  altitude: 129.5,
  speed: 7,
  missionId: '9a902ef4-7ef6-4ba9-813e-c395f7b81187'
}
[2020-11-11T18:07:51.693] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:07:51.702] [INFO] From service realtime - Status of the booster changed : 0
[2020-11-11T18:07:51.775] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:07:51.776] [INFO] From service telemetry-listener - {
  missionId: '9a902ef4-7ef6-4ba9-813e-c395f7b81187',
  rocketStatus: 5,
  fuelLevel: 70,
  altitude: 136.5,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:07:51.784] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:07:51.785] [INFO] From service telemetry-listener - {
  boosterStatus: 0,
  fuelLevel: 38,
  altitude: 136.5,
  speed: 7,
  missionId: '9a902ef4-7ef6-4ba9-813e-c395f7b81187'
}
[2020-11-11T18:07:51.794] [INFO] From service realtime - Status of the rocket changed : 5
[2020-11-11T18:07:51.809] [INFO] From service realtime - Status of the booster changed : 0
[2020-11-11T18:07:51.809] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:07:52.776] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:07:52.776] [INFO] From service telemetry-listener - {
  missionId: '9a902ef4-7ef6-4ba9-813e-c395f7b81187',
  rocketStatus: 5,
  fuelLevel: 70,
  altitude: 143.5,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:07:52.790] [INFO] From service realtime - Status of the rocket changed : 5
[2020-11-11T18:07:52.797] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:07:52.799] [INFO] From service telemetry-listener - {
  boosterStatus: 0,
  fuelLevel: 38,
  altitude: 143.5,
  speed: 7,
  missionId: '9a902ef4-7ef6-4ba9-813e-c395f7b81187'
}
[2020-11-11T18:07:52.817] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:07:52.821] [INFO] From service realtime - Status of the booster changed : 0
[2020-11-11T18:07:53.779] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:07:53.779] [INFO] From service telemetry-listener - {
  missionId: '9a902ef4-7ef6-4ba9-813e-c395f7b81187',
  rocketStatus: 5,
  fuelLevel: 70,
  altitude: 150.5,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:07:53.787] [INFO] From service realtime - Status of the rocket changed : 5
[2020-11-11T18:07:53.798] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:07:53.798] [INFO] From service telemetry-listener - {
  boosterStatus: 0,
  fuelLevel: 38,
  altitude: 150.5,
  speed: 7,
  missionId: '9a902ef4-7ef6-4ba9-813e-c395f7b81187'
}
[2020-11-11T18:07:53.815] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:07:53.819] [INFO] From service realtime - Status of the booster changed : 0
[2020-11-11T18:07:54.683] [INFO] From service booster - Initializing booster detachment.
[2020-11-11T18:07:54.685] [INFO] From service booster - Landing booster.
[2020-11-11T18:07:54.692] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:07:54.693] [INFO] From service telemetry-listener - {
  boosterStatus: 0,
  fuelLevel: 35,
  altitude: 150.5,
  speed: 7,
  missionId: '9a902ef4-7ef6-4ba9-813e-c395f7b81187'
}
[2020-11-11T18:07:54.697] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:07:54.697] [INFO] From service telemetry-listener - {
  boosterStatus: 0,
  fuelLevel: 35,
  altitude: 150.5,
  speed: 7,
  missionId: '9a902ef4-7ef6-4ba9-813e-c395f7b81187'
}
[2020-11-11T18:07:54.714] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:07:54.720] [INFO] From service realtime - Status of the booster changed : 0
[2020-11-11T18:07:54.729] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:07:54.733] [INFO] From service realtime - Status of the booster changed : 0
[2020-11-11T18:07:54.779] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:07:54.779] [INFO] From service telemetry-listener - {
  missionId: '9a902ef4-7ef6-4ba9-813e-c395f7b81187',
  rocketStatus: 5,
  fuelLevel: 70,
  altitude: 157.5,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:07:54.787] [INFO] From service realtime - Status of the rocket changed : 5
[2020-11-11T18:07:55.783] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:07:55.783] [INFO] From service telemetry-listener - {
  missionId: '9a902ef4-7ef6-4ba9-813e-c395f7b81187',
  rocketStatus: 5,
  fuelLevel: 70,
  altitude: 164.5,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:07:55.798] [INFO] From service realtime - Status of the rocket changed : 5
[2020-11-11T18:07:56.781] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:07:56.782] [INFO] From service telemetry-listener - {
  missionId: '9a902ef4-7ef6-4ba9-813e-c395f7b81187',
  rocketStatus: 5,
  fuelLevel: 70,
  altitude: 171.5,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:07:56.800] [INFO] From service realtime - Status of the rocket changed : 5
[2020-11-11T18:07:57.693] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:07:57.693] [INFO] From service telemetry-listener - {
  boosterStatus: 1,
  fuelLevel: 34,
  altitude: 143.5,
  speed: 7,
  missionId: '9a902ef4-7ef6-4ba9-813e-c395f7b81187'
}
[2020-11-11T18:07:57.696] [INFO] From service rocket - Main engine cut off.
[2020-11-11T18:07:57.696] [INFO] From service rocket - Booster detached.
[2020-11-11T18:07:57.697] [INFO] From service rocket - Rocket engines started.
[2020-11-11T18:07:57.711] [INFO] From service realtime - Status of the booster changed : 1
[2020-11-11T18:07:57.714] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:07:57.716] [INFO] From service telemetry-listener - {
  missionId: '9a902ef4-7ef6-4ba9-813e-c395f7b81187',
  rocketStatus: 6,
  fuelLevel: 70,
  altitude: 175,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:07:57.721] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:07:57.721] [INFO] From service telemetry-listener - {
  missionId: '9a902ef4-7ef6-4ba9-813e-c395f7b81187',
  rocketStatus: 6,
  fuelLevel: 70,
  altitude: 175,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:07:57.729] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:07:57.750] [INFO] From service realtime - Status of the rocket changed : 6
[2020-11-11T18:07:57.751] [INFO] From service realtime - Status of the rocket changed : 6
[2020-11-11T18:07:57.782] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:07:57.783] [INFO] From service telemetry-listener - {
  missionId: '9a902ef4-7ef6-4ba9-813e-c395f7b81187',
  rocketStatus: 6,
  fuelLevel: 70,
  altitude: 182,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:07:57.794] [INFO] From service realtime - Status of the rocket changed : 6
[2020-11-11T18:08:00.660] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:08:00.660] [INFO] From service telemetry-listener - {
  boosterStatus: 1,
  fuelLevel: 33,
  altitude: 136.5,
  speed: 7,
  missionId: '9a902ef4-7ef6-4ba9-813e-c395f7b81187'
}
[2020-11-11T18:08:00.666] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:08:00.665] [INFO] From service rocket - Booster detached.
[2020-11-11T18:08:00.665] [INFO] From service rocket - Rocket engines started.
[2020-11-11T18:08:00.681] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:08:00.682] [INFO] From service telemetry-listener - {
  missionId: '9a902ef4-7ef6-4ba9-813e-c395f7b81187',
  rocketStatus: 7,
  fuelLevel: 70,
  altitude: 185.5,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:08:00.689] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:08:00.689] [INFO] From service telemetry-listener - {
  missionId: '9a902ef4-7ef6-4ba9-813e-c395f7b81187',
  rocketStatus: 7,
  fuelLevel: 70,
  altitude: 185.5,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:08:00.705] [INFO] From service realtime - Status of the booster changed : 1
[2020-11-11T18:08:00.729] [INFO] From service realtime - Status of the rocket changed : 7
[2020-11-11T18:08:00.730] [INFO] From service realtime - Status of the rocket changed : 7
[2020-11-11T18:08:03.659] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:08:03.659] [INFO] From service telemetry-listener - {
  boosterStatus: 1,
  fuelLevel: 32,
  altitude: 129.5,
  speed: 7,
  missionId: '9a902ef4-7ef6-4ba9-813e-c395f7b81187'
}
[2020-11-11T18:08:03.665] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:08:03.665] [INFO] From service rocket - Rocket engines started.
[2020-11-11T18:08:03.672] [INFO] From service rocket - Second stage of flight initialized.
[2020-11-11T18:08:03.675] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:08:03.675] [INFO] From service telemetry-listener - {
  missionId: '9a902ef4-7ef6-4ba9-813e-c395f7b81187',
  rocketStatus: 8,
  fuelLevel: 70,
  altitude: 189,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:08:03.677] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:08:03.678] [INFO] From service telemetry-listener - {
  missionId: '9a902ef4-7ef6-4ba9-813e-c395f7b81187',
  rocketStatus: 8,
  fuelLevel: 70,
  altitude: 189,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:08:03.699] [INFO] From service realtime - Status of the booster changed : 1
[2020-11-11T18:08:03.716] [INFO] From service realtime - Status of the rocket changed : 8
[2020-11-11T18:08:03.723] [INFO] From service realtime - Status of the rocket changed : 8
[2020-11-11T18:08:04.676] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:08:04.676] [INFO] From service telemetry-listener - {
  missionId: '9a902ef4-7ef6-4ba9-813e-c395f7b81187',
  rocketStatus: 8,
  fuelLevel: 69,
  altitude: 196,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:08:04.687] [INFO] From service realtime - Status of the rocket changed : 8
[2020-11-11T18:08:05.679] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:08:05.679] [INFO] From service telemetry-listener - {
  missionId: '9a902ef4-7ef6-4ba9-813e-c395f7b81187',
  rocketStatus: 8,
  fuelLevel: 68,
  altitude: 203,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:08:05.690] [INFO] From service realtime - Status of the rocket changed : 8
[2020-11-11T18:08:05.688] [INFO] From service rocket - Rocket is falling ...
[2020-11-11T18:08:05.690] [INFO] From service rocket - The rocket starts falling down!.
[2020-11-11T18:08:05.692] [INFO] From service front - Then the second mission is immediately aborted which causes the head stage status to change to 'Destroyed :('
[2020-11-11T18:08:06.661] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:08:06.661] [INFO] From service telemetry-listener - {
  boosterStatus: 1,
  fuelLevel: 31,
  altitude: 122.5,
  speed: 7,
  missionId: '9a902ef4-7ef6-4ba9-813e-c395f7b81187'
}
[2020-11-11T18:08:06.667] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:08:06.674] [INFO] From service realtime - Status of the booster changed : 1
[2020-11-11T18:08:06.684] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:08:06.685] [INFO] From service telemetry-listener - {
  missionId: '9a902ef4-7ef6-4ba9-813e-c395f7b81187',
  rocketStatus: 8,
  fuelLevel: 67,
  altitude: 210,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:08:06.701] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:08:06.703] [INFO] From service realtime - Status of the rocket changed : 8
[2020-11-11T18:08:06.702] [INFO] From service telemetry-listener - {
  missionId: '9a902ef4-7ef6-4ba9-813e-c395f7b81187',
  rocketStatus: 8,
  fuelLevel: 66,
  altitude: 203,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:08:06.728] [INFO] From service realtime - Status of the rocket changed : 8
[2020-11-11T18:08:06.733] [INFO] From service telemetry-analyser-service - Anomaly on rocket detected ! 
[2020-11-11T18:08:06.734] [INFO] From service telemetry-analyser-service - RocketAnomalies {
  previousAltitude: 203,
  missionId: '9a902ef4-7ef6-4ba9-813e-c395f7b81187',
  anomalies: [ 2 ],
  newAnomaly: 2
}
[2020-11-11T18:08:06.750] [INFO] From service anomaly-handler-service - New anomaly detected... Checking criticality
[2020-11-11T18:08:06.750] [INFO] From service anomaly-handler-service - Anomaly critical, destruction of the rocket
[2020-11-11T18:08:06.759] [INFO] From service rocket - *BOOM!* - Rocket destroyed!
[2020-11-11T18:08:06.768] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:08:06.768] [INFO] From service telemetry-listener - {
  missionId: '9a902ef4-7ef6-4ba9-813e-c395f7b81187',
  rocketStatus: 99,
  fuelLevel: 66,
  altitude: 203,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:08:06.790] [INFO] From service realtime - Status of the rocket changed : 99
[2020-11-11T18:08:07.698] [INFO] From service telemetry-listener - Rocket data received : 
[2020-11-11T18:08:07.698] [INFO] From service telemetry-listener - {
  missionId: '9a902ef4-7ef6-4ba9-813e-c395f7b81187',
  rocketStatus: 99,
  fuelLevel: 65,
  altitude: 196,
  speed: 7,
  pressure: 70
}
[2020-11-11T18:08:07.720] [INFO] From service realtime - Status of the rocket changed : 99
[2020-11-11T18:08:08.699] [INFO] From service front - And the booster continues its landing process normally and finally has the 'Landed' status
[2020-11-11T18:08:09.663] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:08:09.663] [INFO] From service telemetry-listener - {
  boosterStatus: 2,
  fuelLevel: 30,
  altitude: 115.5,
  speed: 7,
  missionId: '9a902ef4-7ef6-4ba9-813e-c395f7b81187'
}
[2020-11-11T18:08:09.670] [INFO] From service realtime - Status of the booster changed : 2
[2020-11-11T18:08:09.672] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:08:12.667] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:08:12.668] [INFO] From service telemetry-listener - {
  boosterStatus: 2,
  fuelLevel: 29,
  altitude: 108.5,
  speed: 7,
  missionId: '9a902ef4-7ef6-4ba9-813e-c395f7b81187'
}
[2020-11-11T18:08:12.677] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:08:12.694] [INFO] From service realtime - Status of the booster changed : 2
[2020-11-11T18:08:15.674] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:08:15.674] [INFO] From service telemetry-listener - {
  boosterStatus: 2,
  fuelLevel: 28,
  altitude: 101.5,
  speed: 7,
  missionId: '9a902ef4-7ef6-4ba9-813e-c395f7b81187'
}
[2020-11-11T18:08:15.684] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:08:15.689] [INFO] From service realtime - Status of the booster changed : 2
[2020-11-11T18:08:18.676] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:08:18.676] [INFO] From service telemetry-listener - {
  boosterStatus: 2,
  fuelLevel: 27,
  altitude: 94.5,
  speed: 7,
  missionId: '9a902ef4-7ef6-4ba9-813e-c395f7b81187'
}
[2020-11-11T18:08:18.686] [INFO] From service realtime - Status of the booster changed : 2
[2020-11-11T18:08:18.689] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:08:21.677] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:08:21.677] [INFO] From service telemetry-listener - {
  boosterStatus: 3,
  fuelLevel: 26,
  altitude: 87.5,
  speed: 7,
  missionId: '9a902ef4-7ef6-4ba9-813e-c395f7b81187'
}
[2020-11-11T18:08:21.685] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:08:21.688] [INFO] From service realtime - Status of the booster changed : 3
[2020-11-11T18:08:24.678] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:08:24.678] [INFO] From service telemetry-listener - {
  boosterStatus: 3,
  fuelLevel: 25,
  altitude: 80.5,
  speed: 7,
  missionId: '9a902ef4-7ef6-4ba9-813e-c395f7b81187'
}
[2020-11-11T18:08:24.685] [INFO] From service realtime - Status of the booster changed : 3
[2020-11-11T18:08:24.691] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:08:27.683] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:08:27.684] [INFO] From service telemetry-listener - {
  boosterStatus: 3,
  fuelLevel: 24,
  altitude: 73.5,
  speed: 7,
  missionId: '9a902ef4-7ef6-4ba9-813e-c395f7b81187'
}
[2020-11-11T18:08:27.689] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:08:27.694] [INFO] From service realtime - Status of the booster changed : 3
[2020-11-11T18:08:30.651] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:08:30.655] [INFO] From service telemetry-listener - {
  boosterStatus: 3,
  fuelLevel: 23,
  altitude: 66.5,
  speed: 7,
  missionId: '9a902ef4-7ef6-4ba9-813e-c395f7b81187'
}
[2020-11-11T18:08:30.664] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:08:30.667] [INFO] From service realtime - Status of the booster changed : 3
[2020-11-11T18:08:33.653] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:08:33.653] [INFO] From service telemetry-listener - {
  boosterStatus: 4,
  fuelLevel: 22,
  altitude: 59.5,
  speed: 7,
  missionId: '9a902ef4-7ef6-4ba9-813e-c395f7b81187'
}
[2020-11-11T18:08:33.669] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:08:33.679] [INFO] From service realtime - Status of the booster changed : 4
[2020-11-11T18:08:36.656] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:08:36.657] [INFO] From service telemetry-listener - {
  boosterStatus: 4,
  fuelLevel: 21,
  altitude: 52.5,
  speed: 7,
  missionId: '9a902ef4-7ef6-4ba9-813e-c395f7b81187'
}
[2020-11-11T18:08:36.671] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:08:36.677] [INFO] From service realtime - Status of the booster changed : 4
[2020-11-11T18:08:39.655] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:08:39.655] [INFO] From service telemetry-listener - {
  boosterStatus: 4,
  fuelLevel: 20,
  altitude: 45.5,
  speed: 7,
  missionId: '9a902ef4-7ef6-4ba9-813e-c395f7b81187'
}
[2020-11-11T18:08:39.662] [INFO] From service realtime - Status of the booster changed : 4
[2020-11-11T18:08:39.668] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:08:42.657] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:08:42.657] [INFO] From service telemetry-listener - {
  boosterStatus: 4,
  fuelLevel: 19,
  altitude: 38.5,
  speed: 7,
  missionId: '9a902ef4-7ef6-4ba9-813e-c395f7b81187'
}
[2020-11-11T18:08:42.667] [INFO] From service realtime - Status of the booster changed : 4
[2020-11-11T18:08:42.670] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:08:45.661] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:08:45.661] [INFO] From service telemetry-listener - {
  boosterStatus: 5,
  fuelLevel: 18,
  altitude: 31.5,
  speed: 7,
  missionId: '9a902ef4-7ef6-4ba9-813e-c395f7b81187'
}
[2020-11-11T18:08:45.667] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:08:45.677] [INFO] From service realtime - Status of the booster changed : 5
[2020-11-11T18:08:48.661] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:08:48.668] [INFO] From service realtime - Status of the booster changed : 5
[2020-11-11T18:08:48.662] [INFO] From service telemetry-listener - {
  boosterStatus: 5,
  fuelLevel: 17,
  altitude: 24.5,
  speed: 7,
  missionId: '9a902ef4-7ef6-4ba9-813e-c395f7b81187'
}
[2020-11-11T18:08:48.674] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:08:51.665] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:08:51.665] [INFO] From service telemetry-listener - {
  boosterStatus: 5,
  fuelLevel: 16,
  altitude: 17.5,
  speed: 7,
  missionId: '9a902ef4-7ef6-4ba9-813e-c395f7b81187'
}
[2020-11-11T18:08:51.675] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:08:51.683] [INFO] From service realtime - Status of the booster changed : 5
[2020-11-11T18:08:54.670] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:08:54.670] [INFO] From service telemetry-listener - {
  boosterStatus: 5,
  fuelLevel: 15,
  altitude: 10.5,
  speed: 7,
  missionId: '9a902ef4-7ef6-4ba9-813e-c395f7b81187'
}
[2020-11-11T18:08:54.676] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:08:54.690] [INFO] From service realtime - Status of the booster changed : 5
[2020-11-11T18:08:57.673] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:08:57.673] [INFO] From service telemetry-listener - {
  boosterStatus: 6,
  fuelLevel: 14,
  altitude: 3.5,
  speed: 7,
  missionId: '9a902ef4-7ef6-4ba9-813e-c395f7b81187'
}
[2020-11-11T18:08:57.682] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:08:57.693] [INFO] From service realtime - Status of the booster changed : 6
[2020-11-11T18:09:00.641] [INFO] From service booster - Booster landed
[2020-11-11T18:09:00.641] [INFO] From service booster - Booster stopped
[2020-11-11T18:09:00.647] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:09:00.648] [INFO] From service telemetry-listener - {
  boosterStatus: 7,
  fuelLevel: 13,
  altitude: 0,
  speed: 0,
  missionId: '9a902ef4-7ef6-4ba9-813e-c395f7b81187'
}
[2020-11-11T18:09:00.650] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:09:00.650] [INFO] From service telemetry-listener - {
  boosterStatus: 6,
  fuelLevel: 13,
  altitude: -3.5,
  speed: 7,
  missionId: '9a902ef4-7ef6-4ba9-813e-c395f7b81187'
}
[2020-11-11T18:09:00.656] [INFO] From service telemetry-listener - Booster data received : 
[2020-11-11T18:09:00.656] [INFO] From service telemetry-listener - {
  boosterStatus: 7,
  fuelLevel: 13,
  altitude: 0,
  speed: 0,
  missionId: '9a902ef4-7ef6-4ba9-813e-c395f7b81187'
}
[2020-11-11T18:09:00.669] [INFO] From service realtime - Status of the booster changed : 6
[2020-11-11T18:09:00.673] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:09:00.685] [INFO] From service realtime - Status of the booster changed : 7
[2020-11-11T18:09:00.685] [INFO] From service realtime - Status of the booster changed : 7
[2020-11-11T18:09:00.690] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:09:00.690] [INFO] From service telemetry-analyser-service - Analyse BoosterData...
[2020-11-11T18:09:08.700] [INFO] From service front - And after the failure of the mission Jeff wants to see where the problem was, so he looks at the telemetries of the rocket
[2020-11-11T18:09:08.717] [ERROR] From service front - [32m┌──────────────────────────────────────────────────────────────────────────┐[39m
[32m│[39m Share your Cucumber Report with your team at [4m[1m[36mhttps://reports.cucumber.io[39m[22m[24m [32m│[39m
[32m│[39m                                                                          [32m│[39m
[32m│[39m Command line option:    [36m--publish[39m                                        [32m│[39m
[32m│[39m Environment variable:   [36mCUCUMBER_PUBLISH_ENABLED[39m=[36mtrue[39m                    [32m│[39m
[32m│[39m                                                                          [32m│[39m
[32m│[39m More information at [4m[1m[36mhttps://reports.cucumber.io/docs/cucumber-js[39m[22m[24m         [32m│[39m
[32m│[39m                                                                          [32m│[39m
[32m│[39m To disable this message, add this to your [1m./cucumber.js[22m:                 [32m│[39m
[32m│[39m [1mmodule.exports = { default: '--publish-quiet' }[22m                          [32m│[39m
[32m└──────────────────────────────────────────────────────────────────────────┘[39m
```