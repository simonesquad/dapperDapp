import Link from 'next/link'
import User from './user'

//** */ style stuff **//
import { Row, Stepper } from '@web3uikit/core';

function HomePage() {

    return (
      <div>
        <Row
          alignItems="center"
          justifyItems="center"
          lg={24}
          md={24}
          sm={16}
          xs={8}
        >
          
            <div>
              <Link href="/">Home</Link>
            </div>
          
            <div>
              <Link href="/native">Native Balance</Link>
            </div>
         
            <div>
              <Link href="/protected">Access Your NFTs</Link>
            </div>
          
            <div>
              <Link href="/user">User Info</Link>
            </div>
         
        </Row>


        <div
          style={{
            height: '1px',
            minHeight: '450px'
          }}
        >
          <Stepper
            onComplete={function noRefCheck(){}}
            onNext={function noRefCheck(){}}
            step={1}
            stepData={[
              {
                content: <p>From here you will be able to navigate your activites and current assets in the{' '}<strong>decentralized web</strong></p>,
                title: 'Welcome to your Control Room "User"'
              },
              {
                content: <div><p>If any button ID = next<br /></p><button id="next">next</button><p>It can be used to navigate<br /></p></div>,
                title: 'What is my Native Token Balance?'
              },
              {
                content: <div><p>If any button ID = prev<br /></p><button id="prev">prev</button><p>It can be used to navigate too<br /></p></div>,
                title: 'Learn more'
              },
              {
                content: <p>Stepper is set to 100% height so you can use a parent div to control its height and it will fill the space dynamically. This parent div is set to 450px height. This means the buttons stay fixed to the bottom in the same place always</p>,
                title: 'Heights'
              },
              {
                content: <p>you can pass any content, we hope you like the stepper</p>,
                title: 'Hope you enjoy'
              }
            ]}
          />
        </div>
      </div>
    )
  }
  
  export default HomePage