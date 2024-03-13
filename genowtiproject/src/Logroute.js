// Logroute.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import App from './App';
import Courses from './Courses.js';
import Handledm from './Handledm.js';
import { Login } from "./Login";
import { Notfound } from './Notfound';
import { Signup } from "./Signup";

function Logroute() 
{
    const not_found_array = 
     [ 
        "!", "!!", "!!!", "!!!!", 
        "@", "@@", "@@@", "@@@@@@",
        "#", "##", "###", "######",
        "$", "$$", "%", "%%", "%%%%",
        "^", "^^^", "&", "&&&", "*",
        "**", "(", ")", "((", "))",
    ];

    return (
        <Routes>
            <Route path="/java_full_stack"   element={<App/>} />
            <Route path="/digital_marketing" element={<Handledm/>}  />  
            <Route path="/courses" element={<Courses/>} />
            <Route path="/login" element={<Login/>} /> 
            <Route path="/signup" element={<Signup/>} />
            { not_found_array.map((item, index) => 
             (
                 <Route key={index} path={item} element={ <Notfound /> } />
             ))}
         </Routes> 
    );
}

export default Logroute;