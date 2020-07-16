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
                        <div>
                            Pleasantville, NY
                        </div>
                    </tr>
                    <tr className='bioRow'>
                        <th className = 'bioLabel'>High School:</th>
                        <div>
                            Pleasantville High School
                        </div>
                    </tr>
                    <tr className='bioRow'>
                        <th className = 'bioLabel'>Programming Languages:</th>
                        <div>Javascript</div>
                        <div>Ruby</div>
                        <div>Python</div>
                    </tr>
                    <tr className='bioRow'>
                        <th className = 'bioLabel'>Technical Skills:</th>
                        <div>HTML</div>
                        <div>CSS</div>
                        <div>React</div>
                        <div>Redux</div>
                        <div>Rails</div>
                        <div>Flask</div>
                        <div>Socket.io</div>
                        <div>SQL</div>
                    </tr>
                    <tr className='bioRow'>
                        <th className = 'bioLabel'>Favorite Sports Teams:</th>
                        <div>Yankees</div>
                        <div>Jets</div>
                        <div>Knicks</div>
                        <div>Fighting Irish</div>
                    </tr>
                    <tr className='bioRow'>
                        <th className = 'bioLabel'>Hobbies:</th>
                        <div>Dungeons and Dragons</div>
                        <div>Golf</div>
                        <div>Tuba</div>
                        <div>Video games</div>
                    </tr>
                    <tr className='bioRow'>
                        <th className = 'bioLabel'>Fun Facts:</th>
                        <div>Both of my parents were born in Portugal</div>
                        <div>I have performed with the band Chicago</div>
                    </tr>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bio