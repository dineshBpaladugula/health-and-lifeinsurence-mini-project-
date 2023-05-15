import { Button } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import './loginInterface.css'

const LoginInterface = ({setLoginUser})=>{
    return (
        <div>
            <div className="Topplan">
               <h1>TOP UP INSURANCE</h1>
               <p>Top-up health insurance works as a supplement to your primary health cover. These plans offer you the desired protection in case the sum insured amount of your current health insurance policy gets exhausted. So, if you think that your existing sum insured/coverage amount is not sufficient then a top-up health plan is a good option for you.</p>
               <p>A top-up health insurance plan is an indemnity policy that provides additional medical coverage to people with an existing health insurance policy or an employer mediclaim policy. It allows people to get their medical expenses covered even if they have exhausted the sum insured of their regular health insurance policy. However, a top-up plan comes with a mandatory deductible and provides coverage only after the insured has paid the deductible amount.
                  If your current policy has a sum assured limit of 5 Lakh and you get a top-up plan of Rs. 7 Lakh. Once your existing sum assured is exhausted then you can use your top-up plan. So, if you have registered a claim of Rs. 8 Lakh then your basic sum assured of Rs. 5 Lakh will be used and the remaining Rs.3 Lakh will be used from your top-up plan. And if the claim you file is more than 12 Lakh then the remaining amount shall be paid from your own pocket.
                  Top up medical insurance plans are affordable and more economical than the basic health insurance. These can also be taken along with the health coverage provided by your employer. A lot of individuals get confused considering top-up and the riders as the same. Actually, health insurance companies top up plans are only the indemnity schemes with a regular cover.</p>
               <h2>Advantages of Top-up Health Insurance Plan</h2>
               <ol>
                   <li>
                   Even if your current health insurance policy gets exhausted while filing a claim, you can still feel and enjoy your peace of mind as you are covered for the remaining duration.
                   </li>
                   <li>
                   Option to enhance your policy coverage while renewing your current policy.
                   </li>
                   <li>
                   You can buy a Top-Up Plan even if you don’t have a basic medical policy
                   </li>
               </ol>
               <h2>Features and Benefits of Top-up Health Insurance Plan</h2>
               <ol>
                   <li>
                   Easily convertible to a basic health plan
                   </li>
                   <li>
                   If both the parents are covered then you can include your children in the same plan
                   </li>
                   <li>
                   No restrictions and sub-limits are applicable on hospitalization expenses like fees charged by the medical practitioner, room rents, doctor fees etc.
                   </li>
                   <li>
                   Avail cumulative bonus on the sum insured for every claim-free year ( up to a specified percentage )
                   </li>
                   <li>
                   No pre-medical screening required up to a specified age
                   </li>
               </ol>
               <img src="images/plan.jpg" alt="plan"/>
           </div>
           <div className="terminsurance">
               <h1>TERM LIFE INSURANCE</h1>
               <p>Term life insurance or term assurance is life insurance that provides coverage at a fixed rate of payments for a limited period of time, the relevant term. After that period expires, coverage at the previous rate of premiums is no longer guaranteed and the client must either forgo coverage or potentially obtain further coverage with different payments or conditions. If the life insured dies during the term, the death benefit will be paid to the beneficiary. Term insurance is typically the least expensive way to purchase a substantial death benefit on a coverage amount per premium dollar basis over a specific period of time.
                 Term life insurance can be contrasted to permanent life insurance such as whole life, universal life, and variable universal life, which guarantee coverage at fixed premiums for the lifetime of the covered individual unless the policy is allowed to lapse. Term insurance is not generally used for estate planning needs or charitable giving strategies but is used for pure income replacement needs for an individual. Term insurance functions in a manner similar to most other types of insurance in that it satisfies claims against what is insured if the premiums are up to date and the contract has not expired and does not provide for a return of premium dollars if no claims are filed. As an example, auto insurance will satisfy claims against the insured in the event of an accident and a homeowner policy will satisfy claims against the home if it is damaged or destroyed, for example, by fire. Whether or not these events will occur is uncertain. If the policyholder discontinues coverage because he or she has sold the insured car or home, the insurance company will not refund the full premium.</p>
             <h2>Usage</h2>
             <p>Because term life insurance is a pure death benefit, its primary use is to provide coverage of financial responsibilities for the insured or his or her beneficiaries. Such responsibilities may include, but are not limited to, consumer debt, dependent care, university education for dependents, funeral costs, and mortgages. Term life insurance may be chosen in favor of permanent life insurance because term insurance is usually much less expensive (depending on the length of the term), even if the applicant is higher risk, such as being an everyday smoker. For example, an individual might choose to obtain a policy whose term expires near his or her retirement age based on the premise that, by the time the individual retires, he or she would have amassed sufficient funds in retirement savings to provide financial security for the claims.</p>
           <img src="images/term.svg" alt="term"/>
           </div>
           <div className="wholeinsurance">
               <h1>WHOLE LIFE INSURANCE</h1>
               <p>Whole life insurance, or whole of life assurance (in the Commonwealth of Nations), sometimes called "straight life" or "ordinary life," is a life insurance policy which is guaranteed to remain in force for the insured's entire lifetime, provided required premiums are paid, or to the maturity date.[1] As a life insurance policy it represents a contract between the insured and insurer that as long as the contract terms are met, the insurer will pay the death benefit of the policy to the policy's beneficiaries when the insured dies. Because whole life policies are guaranteed to remain in force as long as the required premiums are paid, the premiums are typically much higher than those of term life insurance where the premium is fixed only for a limited term. Whole life premiums are fixed, based on the age of issue, and usually do not increase with age. The insured party normally pays premiums until death, except for limited pay policies which may be paid up in 10 years, 20 years, or at age 65. Whole life insurance belongs to the cash value category of life insurance, which also includes universal life, variable life, and endowment policies.</p>
               <h1>Uses</h1>
               <h2>Personal and family uses</h2>
               <p>Individuals may find whole life attractive because it offers coverage for an indeterminate length of time. It is the dominant choice for insuring so-called "permanent" insurance needs, including:

Funeral expenses,
Estate planning,
Surviving spouse income, and
Supplemental retirement income.
Individuals may find whole life less attractive, due to the relatively high premiums, for insuring:

Large debts,
Temporary needs, such as children's dependency years,
Young families with large needs and limited income.
In the second category, term life is generally considered more suitable and has played an increasingly larger role in recent years.</p>
           <h2>Business uses</h2>
           <p>Businesses may also have legitimate and compelling needs, including funding of:[6]

Buy-sell agreements
Death of key person[7]
Supplemental executive retirement plans (S.E.R.P.)
Deferred compensation
While Term life may be suitable for Buy-Sell agreements and Key Person indemnification, cash value insurance is almost exclusively for Deferred Comp and S.E.R.P.'s.</p>
           <img src="images/whole.jpg" alt="whole"/>
           </div>
            <div className="groupinsurance">
                <h1>Group Health Insurance Policy</h1>
                <p>Group insurance is an insurance that covers a group of people, for example the members of a society or professional association, or the employees of a particular employer for the purpose of taking insurance. Group coverage can help reduce the problem of adverse selection by creating a pool of people eligible to purchase insurance who belong to the group for reasons other than the wish to buy insurance. Grouping individuals together allows insurance companies to give lower rates to companies, "Providing large volume of business to insurance companies gives us greater bargaining power for clients, resulting in cheaper group rates."</p>
           <img src="images/group.jpg" alt="group"></img>
           <h2>How Group Health Insurance Works </h2>
           <p>Group health insurance plans are purchased by companies and organizations and then offered to their members or employees. Plans can only be purchased by groups, which means individuals cannot purchase coverage through these plans. Plans usually require at least 70% participation in the plan to be valid. Because of the many differences insurers, plan types, costs, and terms and conditions between plans, no two are ever the same.</p>
          <img src="images/group1.jpg" alt="group1" width="800px" height="500px"></img>
           <h2>Advantages of Group health insurance</h2>
           <p>The policy covers benefits for the employee and their family</p>
           <ol>
               <li>No physical health checkup</li>
               <li>Covers people regardless of their age</li>
               <li>Customized health care</li>
               <li>Affordable than buying an individual health insurance policy</li>
               <li>Family is covered in the given sum insured</li>
           </ol>
            </div>
            <div>
                <h2>APPLY FOR THE GROUP HEALTH LIFE INSURANCE
                <Link to='/application' className="applicationform">
            <Button variant="outlined" color="primary" className="appform"> APPLY</Button>
            </Link>
                </h2>
            
            </div>
        <div className="interface" >
           <Button variant="outlined" color="secondary"onClick={() => setLoginUser({})} >LOGOUT</Button>
        </div>
        </div>
    )
}

export default LoginInterface
