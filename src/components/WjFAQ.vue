<template>
  <div class="wj-FAQ">
    <div>
      <img src="../assets/img/ls/drama.jpg" alt="" />
      <img src="../assets/img/ls/日期.png" alt="" />
    </div>
    <div>
      <div>
        <h3>Prologue</h3>
        <p>
          “Times 03/Jan/2009 Chancellor on edge of second bailout for banks.”
          Satoshi Nakamoto left this quote in Bitcoin’s genesis block.
        </p>
        <p>
          The controversy caused by “ATOM2.0” and “Proposal #78” reminds us of
          this sentence.
        </p>
        <p>
          We believe the core development team has been working hard to build,
          which is why we are where we are today from 2016. There may be drama
          but we are all working toward the same thing at the end of the day
          Drama makes us all stronger. But how can we always trust, or as much
          as possible, ensure that our core team and the growing number of new
          project developers remain honest?
        </p>
        <h3>Chapter 1 - We hold these truths to be self-evident</h3>
        <h4>1. All holders are HODL equal</h4>
        <p>
          Cosmos does not belong to the founder, nor to the founding team, nor
          to some elite groups. Cosmos belongs to everyone who owns ATOM, even
          if the person has only 0.01 ATOM in his wallet, even if he can only
          pay the gas fee for one vote.
        </p>
        <h4>2. Don't trust, verify</h4>
        <p>
          This is the most basic principle in the crypto world. This should
          never be forgotten, even in the "Cosmos".
        </p>
        <h4>3、Power should be caged</h4>
        <p>
          If there are some actions that cannot be verified temporarily, then
          those actions must be supervised. No matter how honest they are, or
          how noble their purpose. Supervise cannot be accomplished by voting
          alone.
        </p>
        <h3>Chapter 2 - How can we defend the above principles</h3>
        <h4>1. NFT</h4>
        <p>
          We're going to launch a series of NFTs called “Drama Hunter”, 20% of
          NFT sales are used for pre-project construction, 20% is used to cover
          the operation and maintenance costs of the project. The remaining 60%
          of funds are used to set up a fund.
        </p>
        <h4>2. FUND</h4>
        <p>
          The foundation's main funding will be used to encourage and reward the
          investigation and reporting of a range of "rug" incidents, including
          expanding surveillance teams and improving surveillance techniques.
        </p>
      </div>
      <div>
        <h4>3. DAO</h4>
        <p>
          We will set up a DAO to manage the fund, NFT owners who are interested
          in participating in the monitoring behavior will discuss how to
          monitor more effectively here, discuss the mechanism of reward and
          punishment, the use of funds, the distribution of benefits, and more.
        </p>
        <p>We want this DAO to be the oversight center for the Cosmos</p>
        <h3>Chapter 3 - About NFT</h3>
        <h4>1. What is this series called？</h4>
        <p>Drama Hunter</p>
        <h3>2. What’s that?</h3>
        <p>
          Drama hunter are little warriors who live in the Cosmos. They want the
          community to stick together. Build and grow together. They scout and
          hunt down Dramaers‘s various tricks.
        </p>
        <h4>3. How come you got such a name</h4>
        <p>
          The standard to measure the performance of a public chain is generally
          TPS, while the concept to measure the development of Cosmos ecology is
          DPS (Drama Per Second), which was first defined by Jack Zampolin and
          has since been adopted by more and more community members. We love
          watching the community move forward in "Drama," but we don't want to
          be fooled. The project developers who have received the support of
          Holder's real money should earnestly fulfill their commitments, and
          those clumsy and irresponsible actors, who do not deserve the
          opportunity to perform on stage again, should make everyone wary of
          them changing their faces and cheating again.
        </p>
        <h4>4. What can I get by MINT an NFT</h4>
        <p>1)You will get a well-designed PFP, a cute goblin.</p>
        <p>
          2)It can be used as an avatar to join the Discord of the competent
          community to participate in the discussion, and the monitoring
          behavior that is rated as effective by the community will receive more
          bonuses.
        </p>
        <p>
          3) Become a member of DAO and have voting rights to participate in the
          governance of DAO.
        </p>
        <p>
          4) In order to expand our influence, perhaps we will consider setting
          up verification nodes to increase the voting power of DAO in the
          entire community. And NFT holders will share all the benefits other
          than community node maintenance funds.
        </p>
        <p>5) Possible Airdrop.</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Wj-FAQ",
  components: {},
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.wj-FAQ {
  margin: 0 25px 0 25px;
  border: 30px solid #75cafa;
  padding: 30px;
  line-height: 2em;
  > div:nth-child(2) {
    display: flex;
    text-align: left;
    margin-bottom: 50px;
    > div {
      flex: 1;
      margin: 0 50px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      h3 {
        margin-bottom: 0;
      }
      h4 {
        margin-bottom: 10px;
      }
      p {
        margin-bottom: 50px;
      }
    }
  }

  > div:nth-child(1) {
    width: 800px;
    margin: 0 auto;
    position: relative;
  }

  img:nth-child(1) {
    width: 800px;
  }

  img:nth-child(2) {
    position: absolute;
    bottom: 40px;
    width: 400px;
    right: 0;
  }
}
</style>
