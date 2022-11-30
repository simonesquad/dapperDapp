import Link from 'next/link';
import { getSession, signOut } from 'next-auth/react';

//** */ style stuff **//
import { Row, Stepper, Button } from '@web3uikit/core';

function HomePage() {

    return (
      <div>
        <Row
          alignItems="stretch"
          justifyItems="space-between"
          lg={34}
          md={24}
          sm={16}
          xs={8}
        >
          
            <div>
              <Link href="/">Home</Link>
            </div>

            <div>
              <Button 
                onClick={() => signOut({ redirect: '/signin' })} 
                text="Sign Out"
                size="small"
              />
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
                content: <div><p>Curious what you've been up to? Check the transations for this wallet here:</p><Link href="/transactions">Transactions</Link></div>,
                title: 'My Activity'
              },
              {
                content: <p>you can pass any content, we hope you like the stepper</p>,
                title: 'Hope you enjoy'
              }
            ]}
          />
        </div>
      </div>


    


      
    );
  }

  export async function getServerSideProps(context) {
    const session = await getSession(context);
    
    // redirect if not authenticated
    if (!session) {
        return {
            redirect: {
                destination: '/signin',
                permanent: false,
            },
        };
    }

    return {
        props: { user: session.user },
    };
}
  
  export default HomePage;