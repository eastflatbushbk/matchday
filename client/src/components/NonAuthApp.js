import React from 'react'
import { Routes , Route} from "react-router-dom";

function NonAuthApp({}) {
  return (
    <div>
        <NavBar />
       <Routes>
       <Route exact path="/">
                    <Login setCurrentUser={setCurrentUser} />
                </Route>
           {/* <Route exact path="/teams" element={<TeamPage teams={teams} />} />
           <Route exact path="/add_team" element={<TeamForm onAddTeam={handleNewTeam}/>} />
           <Route exact path="/add_player" element={<NewPlayerForm />} />
           <Route exact path="/about" element={<About />} />
            <Route  path="/teams/:id" element={<TeamCard />} />
            <Route  path="/update_player" element={<PlayerForm />} /> */}
      </Routes>

    </div>
  )
}

export default NonAuthApp