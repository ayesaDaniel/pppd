import React from 'react'

const WaitlistVerf = () => {

    let imgSrc = process.env.PUBLIC_URL;

  return (
    <div 
    className='h-screen bg-cover bg-center p-6 px-10 flex items-center justify-center'
    style={{
        backgroundImage: `url('https://s3-alpha-sig.figma.com/img/0dcd/a78a/912fe14d2d05a2f86f0e72c8cfd65ebe?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=S92XqaTo7uJzxZnuXd0TvolXniSg8Gfr4D72OTfllqpCuPS62qjAUSTcK1BjqeEQtuz8LQiZV7jvE0JLL4-h5Lznjhs77LSfOWngemM2mAV2LBoeobhDLO2FblCwPC7Hr~YYBca0KymgHMrj9D4Cgbg-UjcsLmdRF1hEmPg4z8~4AtQjnXQiSYEc2svUkYMQOC4WWkuimHJUyi0tAgl5Vi2sXQQJRSENVJgQRB9gxBU6vm2nlnWM55YQqakT8C9B62E2HR5ZHptddxzK54fb1V6rx87Er8N8dYs9fzRcUXdaPTwD8oLT1HLniwoikCkDgNR9ITDMP22GWIay1ttXiA__')`,
    }}
    >
    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-black opacity-50"></div>
        <section 
        className="z-30" 
        >
            <div className=' gap-12 flex flex-col justify-center items-center p-4 py-6 lg:p-11 bg-white max-w-custom max-h-height rounded-3xl '>
            <div class="z-10"><img src={`${imgSrc}/img/check_5610944 1.png`} alt="My Image" /></div>
            <h2 className=' text-2xl font-bold'>Success! You're on the List!</h2>
            <p className=' text-base font-normal  lg:px-20 '>
            Invite your friends to join the wait and stay tuned—we’ll send you an updates as we continue building towards launch.
            </p>
            
            <button className="px-8 py-2 text-white bg-indigo-900 rounded-lg font-bold  sm:w-full ">Get Started</button>
            </div>
        </section>
    </div>
  )
}

export default WaitlistVerf