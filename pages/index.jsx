import Link from 'next/link';
import { getSession } from 'next-auth/react';

//** */ style stuff **//
import { Stepper } from '@web3uikit/core';


function HomePage() {

    return (
      <div class=".bg-secondary.bg-gradient">
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
                content: <div><p>Access the Native Token balance for this wallet:<br /></p><Link href="/native"><button type="button" class="btn btn-secondary btn-lg">Native Balance</button></Link></div>,
                title: 'What is my Native Token Balance?'
              },
              {
                content: <div><p>We've got your NFTs tucked away safely in a convenient dashboard here:<br /></p><Link href="/protected"><button type="button" class="btn btn-secondary btn-lg">Access Your NFTs</button></Link></div>,
                title: 'Where are my NFTs?'
              },
              {
                content: <div><p>Curious what you've been up to? Check the transations for this wallet here:</p><Link href="/transactions"><button type="button" class="btn btn-secondary btn-lg">Transactions</button></Link></div>,
                title: 'My Activity'
              },
              {
                content: <div><p>Feel free to email our team and we will get back to you as quickly as possible!</p><Link href="/contact"><button type="button" class="btn btn-secondary btn-lg">Contact Us</button></Link></div>,
                title: 'Have further questions?'
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