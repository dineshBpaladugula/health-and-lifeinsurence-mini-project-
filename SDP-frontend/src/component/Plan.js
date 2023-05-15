import React from 'react';
import './Plan.css';
import { MdOutlineHealthAndSafety } from 'react-icons/md';
import { GiLifeBar , GiLifeInTheBalance} from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';

function Plan() {
  return (
    <IconContext.Provider value={{ color: '#fff', size: 64 }}>
      <div className='plan_section'>
        <div className='insurance2'>
          <h1>What is Insurance </h1>
          <p>Insurance is a contract, represented by a policy, in which an individual or entity receives financial
             protection or reimbursement against losses from an insurance company.The insured receives a contract, 
             called the insurance policy, which details the conditions and circumstances under which the insurer will 
             compensate the insured, or their designated beneficiary or assignee. The amount of money charged by the
              insurer to the policyholder for the coverage set forth in the insurance policy is called the premium. 
              If the insured experiences a loss which is potentially covered by the insurance policy, the insured
              submits a claim to the insurer for processing by a claims adjuster 
             <Link to='/about' className='insurance-link'>  For more information</Link></p>
             <h1>About Health Insurance</h1>
             <p>Health insurance is a contract that requires an insurer to pay some or all of a person's healthcare 
               costs in exchange for a premium.1 More specifically, health insurance typically 
               pays for medical, surgical, prescription drug, and sometimes dental expenses
                incurred by the insured. Health insurance can reimburse the insured for expenses 
                incurred from illness or injury, or pay the care provider directly.
                <Link to='/about' className='insurance-link'>For more information</Link></p>
                <h1>About Life Insurance</h1>
                <p>Life insurance is a contract between an insurer and a policy owner. A life insurance policy guarantees
                   the insurer pays a sum of money to named beneficiaries when the insured dies in exchange for the premiums 
                   paid by the policyholder during their lifetime.For the contract to be enforceable, the life insurance application must
                    accurately disclose the insured’s past and current health conditions and high-risk activities.
                    <Link to='/about' className='insurance-link'>For more information</Link></p>     
               <img src="images/insurancrea.jpg" alt="insurance"/>
        
        </div>
        <div className='plan_wrapper'>
          <h1 className='plan_heading'>Plans or an Insurance</h1>
          <div className='plan_container'>
            <Link to='/login' className='plan_container-card'>
              <div className='plan_container-cardInfo'>
                <div className='icon'>
                  <MdOutlineHealthAndSafety />
                </div>
                <h3>Top Up Plan</h3>
                <h1>Claims</h1>
                <h4>₹200000</h4>
                <ul className='plan_container-features'>
                  <li>It covers Health Insurance</li>
                  <li>per month</li>
                  <li>₹4560</li>
                </ul>
              </div>
            </Link>
            <Link to='/login' className='plan_container-card'>
              <div className='plan_container-cardInfo'>
                <div className='icon'>
                  <GiLifeBar />
                </div>
                <h1>Whole Life Plan</h1>
                <h1>Claims</h1>
               
               <h1>₹1000000</h1>
                <ul className='plan_container-features'>
                  <li>It Covers Both the </li>
                  <li>Health Insurance</li>
                  <li>and</li>
                  <li>Life Insurance</li>
                </ul>
              </div>
            </Link>
            <Link to='/login' className='plan_container-card'>
              <div className='plan_container-cardInfo'>
                <div className='icon'>
                  <GiLifeInTheBalance />
                </div>
                <h3>Term Life Insurance</h3>
                <h1>Claims</h1>
                <h1>₹400000</h1>
                <ul className='plan_container-features'>
                  <li>It Covers Life Insurance</li>
                  <li>per month</li>
                  <li>₹6000</li>
                </ul>      
              </div>
            </Link>
          </div>
        </div>
        <div className="empty"></div>
        <div className="insurance2">
          <h1>Top up plan</h1>
          <p>A top-up health insurance plan is an indemnity policy that provides additional medical coverage to people with an existing health insurance
             policy or an employer mediclaim policy. It allows people to get their medical expenses covered even if they have exhausted the sum insured of 
             their regular health insurance policy. However, a top-up plan comes with a mandatory deductible and provides coverage only after the insured has
              paid the deductible amount.If your current policy has a sum assured limit of 5 Lakh and you get a top-up plan of Rs. 7 Lakh. Once your existing 
              sum assured is exhausted then you can use your top-up plan. So, if you have registered a claim of Rs. 8 Lakh then your basic sum assured of Rs. 5
               Lakh will be used and the remaining Rs.3 Lakh will be used from your top-up plan. And if the claim you file is more than 12 Lakh then the remaining
              amount shall be paid from your own pocket.op up medical insurance plans are affordable and more economical than the basic health insurance. <Link to='/login' className='insurance-link'> For more information</Link></p>
          <h1>Whole Life Insurance</h1>
          <p>Whole life insurance, or whole of life assurance (in the Commonwealth of Nations), sometimes called "straight life" or "ordinary life," 
            is a life insurance policy which is guaranteed to remain in force for the insured's entire lifetime, provided required premiums are paid, or to the
             maturity date.[1] As a life insurance policy it represents a contract between the insured and insurer that as long as the contract terms
              are met, the insurer will pay the death benefit of the policy to the policy's beneficiaries when the insured dies. Because whole life policies
               are guaranteed to remain in force as long as the required premiums are paid, the premiums are typically much higher than those of
                term life insurance where the premium is fixed only for a limited term. Whole life premiums are fixed, based on the age of issue, 
                and usually do not increase with age. The insured party normally pays premiums until death  
                <Link to='/login' className='insurance-link'> For more information</Link></p>
          <h1>Term Life Insurance</h1>
          <p>Term life insurance or term assurance is life insurance that provides coverage at a fixed rate of payments for a limited period of time, 
            the relevant term. After that period expires, coverage at the previous rate of premiums is no longer guaranteed and the client must either 
            forgo coverage or potentially obtain further coverage with different payments or conditions. If the life insured dies during the term, the death
             benefit will be paid to the beneficiary.Term insurance is typically the least expensive way to purchase a substantial death benefit on a coverage 
             amount per premium dollar basis over a specific period of time.Term life insurance can be contrasted to permanent life insurance such as whole life, 
             universal life, and variable universal life, which guarantee coverage at fixed premiums for the lifetime of the covered individual unless the policy
              is allowed to lapse. Term insurance is not generally used for estate planning needs or charitable giving strategies but is used for pure income replacement 
              needs for an individual.<Link to='/login' className='insurance-link'> For more information</Link> </p>

        </div>
      </div>
    </IconContext.Provider>
  );
}
export default Plan;