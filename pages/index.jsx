import Link from 'next/link'
import User from './user'

//** */ style stuff **//
import { Row, Stepper, Button } from '@web3uikit/core';

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
                content: <div><p>Access the Native Token balance for this wallet:<br /></p><Link href="/native">Native Balance</Link></div>,
                title: 'What is my Native Token Balance?'
              },
              {
                content: <div><p>We've got your NFTs tucked away safely in a convenient dashboard here:<br /></p><Link href="/protected">Access Your NFTs</Link></div>,
                title: 'Where are my NFTs?'
              },
              {
                content: <div><p>Securing your user details found here:</p><Link href="/user">User Info</Link></div>,
                title: 'My Profile'
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