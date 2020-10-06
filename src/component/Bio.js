import React from 'react'

function Bio(){
    return(
        <div className='cardContainer'>
            <div className = 'card'>
                <div className ='experienceRow'>
                    <div className='cardTitle'>About Me</div><br/>
                    <div className='bioTable'>
                    <tr className='bioRow'>
                        <th className = 'bioLabel'>Hometown:</th>
                        <li>
                            Pleasantville, NY
                        </li>
                    </tr>
                    <tr className='bioRow'>
                        <th className = 'bioLabel'>High School:</th>
                        <li>
                            Pleasantville High School
                        </li>
                    </tr>
                    <tr className='bioRow'>
                        <th className = 'bioLabel'>Technical Skills:</th>
                        <li>Javascript</li>
                        <li>Ruby</li>
                        <li>Python</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>React</li>
                        <li>Redux</li>
                        <li>Rails</li>
                        <li>Flask</li>
                        <li>Socket.io</li>
                        <li>SQL</li>
                        <li>Git</li>
                        <li>GitHub</li>
                    </tr>
                    <tr className='bioRow'>
                        <th className = 'bioLabel'>Favorite Sports Teams:</th>
                        <li>Yankees</li>
                        <li>Jets</li>
                        <li>Knicks</li>
                        <li>Fighting Irish</li>
                    </tr>
                    <tr className='bioRow'>
                        <th className = 'bioLabel'>Hobbies:</th>
                        <li>Dungeons and Dragons</li>
                        <li>Golf</li>
                        <li>Tuba</li>
                        <li>Video games</li>
                    </tr>
                    <tr className='bioRow'>
                        <th className = 'bioLabel'>Fun Facts:</th>
                        <li>Both of my parents were born in Portugal.</li>
                        <li>I have performed with the band Chicago.</li>
                        <li>I have played quidditch.</li>
                    </tr>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bio