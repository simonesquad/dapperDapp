import React from "react";
import { useState, useEffect } from "react";
import { Card, Illustration } from "@web3uikit/core"

function PortfolioValue({ tokens, nativeValue }) {
  const [totalValue, setTotalValue] = useState(0);


  useEffect(() => {
    let val = 0;
    for (let i = 0; i < tokens.length; i++) {
      val = val + Number(tokens[i].val);
    }
    val = val + Number(nativeValue);

    setTotalValue(val.toFixed(2));
  }, [nativeValue, tokens]);

  return (
    <>
    <div
      style={{
        width: '250px'
      }}
    >
      <Card
        description={totalValue}
        isSelected
        onClick={function noRefCheck(){}}
        setIsSelected={function noRefCheck(){}}
        title="Portfolio Total Value"
        tooltipText="Lorem Ipsum Dole met sai souni lokomit anici trenicid"
      >
        <div>
          <Illustration
            height="180px"
            logo="servers"
            width="100%"
          />
        </div>
      </Card>
    </div>
    </>
  );
}

export default PortfolioValue;