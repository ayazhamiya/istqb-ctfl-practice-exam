/* CTFL v4.0 practice question banks.
   Original material, MIT licensed. Edit this file to add or correct questions.
   Justifications must never refer to an option by letter: the option order is shuffled at run time. */

window.CTFL_BANK = {
  chapters: {
    "1": "1 Fundamentals of Testing",
    "2": "2 Testing Throughout the SDLC",
    "3": "3 Static Testing",
    "4": "4 Test Analysis and Design",
    "5": "5 Managing the Test Activities",
    "6": "6 Test Tools"
  },
  sets: [
  {
   id: "m1",
   name: "Set M1",
   blurb: "The full syllabus, 40 questions",
   questions: [
  {
    ch: 1,
    lo: "FL-1.1.1 (K1)",
    stem: "Which of the following is a valid objective of testing?",
    opts: ["To find as many failures as possible so that the test object can be declared free of defects","To take over from the development team the responsibility for the quality of the delivered product","To prevent defects by evaluating work products such as requirements and user stories","To demonstrate to the customer that no defects remain in the system under test"],
    ans: [2],
    just: "Evaluating work products such as requirements, user stories and designs is one of the typical test objectives, and it prevents defects from being built into the code. Testing can never prove that a system is free of defects or that none remain, and responsibility for quality stays with the whole team rather than passing to the testers."
  },
  {
    ch: 4,
    lo: "FL-4.1.1 (K2)",
    stem: "Which of the following statements about the categories of test techniques is CORRECT?",
    opts: ["Experience-based test techniques use the knowledge and skill of the testers to derive test cases","Black-box test techniques derive test cases from an analysis of the internal structure of the test object","White-box test techniques are based on an analysis of the specified behaviour of the test object","Coverage can only be measured for test cases derived with black-box test techniques"],
    ans: [0],
    just: "Experience-based techniques draw on the tester's knowledge of the test object, of similar systems and of typical developer errors. Two of the other options simply swap the definitions of black-box and white-box techniques, and coverage can in fact be measured for both black-box and white-box techniques."
  },
  {
    ch: 2,
    lo: "FL-2.1.1 (K2)",
    stem: "Which of the following statements about the influence of the software development lifecycle (SDLC) on testing is CORRECT?",
    opts: ["In a sequential SDLC, test design can only start once the code has been written","In an iterative SDLC, regression testing becomes increasingly important as the product grows with every iteration","In an incremental SDLC, static testing in the early increments removes the need for dynamic testing in the later ones","In an agile SDLC, the test levels used in sequential models cannot be applied at all"],
    ans: [1],
    just: "Each iteration adds to an existing product, so the risk of breaking what already works grows and regression testing gains weight. Test design can start as soon as the test basis is available and need not wait for code, static testing never removes the need for dynamic testing, and test levels are used in agile projects as well."
  },
  {
    ch: 5,
    lo: "FL-5.1.1 (K2)",
    stem: "Which of the following would you expect to find in a test plan?",
    opts: ["The detailed steps and expected results of every test case","The list of anomalies detected during the previous test cycle","The source code of the automated test scripts","The test schedule, the entry and exit criteria and the resources required"],
    ans: [3],
    just: "A test plan describes the objectives, scope, schedule, resources, entry and exit criteria and the approach to testing. Detailed test steps belong in test cases and test procedures, anomalies are held in the defect management system, and test scripts are testware rather than plan content."
  },
  {
    ch: 3,
    lo: "FL-3.1.2 (K2)",
    stem: "Which of the following is a benefit that can be achieved by static testing but NOT by dynamic testing?",
    opts: ["Detecting failures caused by the interaction of two components at run time","Measuring the response time of the system under a defined load","Detecting inconsistencies, ambiguities and omissions in the requirements before any code exists","Confirming that a defect reported earlier has been correctly fixed"],
    ans: [2],
    just: "Static testing examines work products without executing them, so it can be applied to requirements long before code exists and can find ambiguities and contradictions that dynamic testing could never reveal. Every other option requires the software to be executed."
  },
  {
    ch: 4,
    lo: "FL-4.2.1 (K3)",
    stem: "You are testing the shipping-cost calculation of an online shop. It has two inputs:",
    extra: "<ul><li><strong>Order value</strong>, with four ranges: below 25.00 EUR; 25.00 to 49.99 EUR; 50.00 to 99.99 EUR; 100.00 EUR and above</li><li><strong>Destination</strong>, with three options: domestic; European Union; rest of the world</li></ul><p>Orders to the rest of the world are accepted only for an order value of 100.00 EUR and above. The shop rejects any other combination with an error message before the shipping cost is calculated.</p><p>Each test uses one order value and one destination. You apply equivalence partitioning (EP) to cover every order value range and every destination.</p>",
    stem2: "What is the MINIMAL number of test cases needed to achieve 100% EP coverage of the valid partitions?",
    opts: ["3","4","5","7"],
    ans: [1],
    just: "There are four valid order-value partitions and three valid destination partitions, so at least four test cases are needed. Four are also sufficient, because a valid combination exists for each one, for example: (below 25.00, domestic), (25.00–49.99, EU), (50.00–99.99, domestic), (100.00 and above, rest of the world)."
  },
  {
    ch: 1,
    lo: "FL-1.1.2 (K2)",
    stem: "Which of the following activities is part of debugging rather than part of testing?",
    opts: ["Executing a test procedure that causes the component to display an incorrect total","Designing test cases from the acceptance criteria of a user story","Reporting an anomaly observed during the execution of a test procedure","Reproducing a failure, locating the fault in the code and correcting it"],
    ans: [3],
    just: "Debugging is the development activity of reproducing a failure, diagnosing its cause and fixing the defect. Executing a test, reporting the anomaly it exposes and designing tests from acceptance criteria are all testing activities; the diagnosis and the fix are debugging."
  },
  {
    ch: 5,
    lo: "FL-5.1.3 (K2)",
    stem: "Which TWO of the following are examples of exit criteria for a test level?",
    multi: true,
    opts: ["The test environment is available and stable","The planned test coverage of the identified product risks has been achieved","The required test data has been prepared and loaded","The testers have been trained on the new test management tool","The number of unresolved high-priority defects is below the agreed threshold"],
    ans: [1,4],
    just: "Exit criteria define what must be true before testing can be declared complete: achieved coverage and an acceptable number of unresolved defects are typical examples. An available environment, prepared test data and trained testers are entry criteria, that is, preconditions for starting."
  },
  {
    ch: 6,
    lo: "FL-6.1.1 (K2)",
    stem: "A team must generate large volumes of realistic input records so that a new batch interface can be tested. Which type of tool support is MOST appropriate?",
    opts: ["A test data preparation tool","A test management tool","A static analysis tool","A coverage measurement tool"],
    ans: [0],
    just: "Test data preparation tools generate, transform or anonymize data so that realistic volumes are available for test execution. Test management tools organize the test process, static analysis tools examine code without executing it, and coverage tools measure how much of the code the tests exercised."
  },
  {
    ch: 4,
    lo: "FL-4.2.2 (K3)",
    stem: "A parcel system assigns a shipping category based on the parcel weight in whole grams:",
    extra: "<ul><li>0 to 500 g: letter</li><li>501 to 2000 g: small parcel</li><li>2001 to 10000 g: parcel</li><li>10001 to 30000 g: freight</li></ul><p>Weights above 30000 g are not accepted. You have prepared the following test cases:</p><div class=\"figure\"><table class=\"dt\"><tr><th></th><th>Weight (g)</th><th>Expected category</th></tr><tr><td class=\"rowhead\">TC1</td><td>0</td><td>letter</td></tr><tr><td class=\"rowhead\">TC2</td><td>500</td><td>letter</td></tr><tr><td class=\"rowhead\">TC3</td><td>750</td><td>small parcel</td></tr><tr><td class=\"rowhead\">TC4</td><td>2000</td><td>small parcel</td></tr><tr><td class=\"rowhead\">TC5</td><td>10001</td><td>freight</td></tr></table></div>",
    stem2: "What 2-value boundary value analysis (BVA) coverage of the parcel weight is achieved by these test cases?",
    opts: ["40%","62.5%","50%","80%"],
    ans: [2],
    just: "The four valid partitions have eight boundary values: 0, 500, 501, 2000, 2001, 10000, 10001 and 30000. The test cases cover 0, 500, 2000 and 10001, that is four of eight, so BVA coverage is 50%. TC3 uses 750, which is not a boundary value."
  },
  {
    ch: 2,
    lo: "FL-2.1.3 (K1)",
    stem: "Which of the following BEST describes behaviour-driven development (BDD)?",
    opts: ["Component tests are written by the developers immediately after the code has been written and are then automated","The acceptance criteria are derived from the finished code by an independent test team before the release","Test cases are derived from the code structure in order to reach the agreed level of branch coverage","Tests are expressed in a natural, business-readable format describing the desired behaviour, and this guides the development of the code"],
    ans: [3],
    just: "BDD expresses the desired behaviour in a simple, structured natural language, typically given/when/then, that the whole team can read, and these examples then drive the implementation. The other options describe writing tests after the code, deriving acceptance criteria late from the finished product, and white-box test design."
  },
  {
    ch: 3,
    lo: "FL-3.1.1 (K1)",
    stem: "Which of the following can be examined by static testing?",
    romans: ["Source code","Test cases","Contracts and project plans","The behaviour of the system observed during an exploratory testing session","User stories with their acceptance criteria"],
    stem2: "",
    opts: ["i, ii and iii only","i, ii, iii and v","i, ii and v only","i, ii, iii, iv and v"],
    ans: [1],
    just: "Static testing can be applied to almost any work product that can be read and reasoned about, including code, testware, contracts, plans and user stories. Item iv is not a work product but behaviour observed while the software is running, which is dynamic testing."
  },
  {
    ch: 5,
    lo: "FL-5.1.4 (K3)",
    stem: "Your team estimates the effort to test a new reporting feature using the three-point estimation technique. The estimates are:",
    extra: "<ul><li>Most optimistic estimate: 6 person-days</li><li>Most likely estimate: 9 person-days</li><li>Most pessimistic estimate: 24 person-days</li></ul>",
    stem2: "What is the resulting estimate?",
    opts: ["11 person-days","9 person-days","13 person-days","15 person-days"],
    ans: [0],
    just: "The three-point estimate is (optimistic + 4 × most likely + pessimistic) / 6 = (6 + 36 + 24) / 6 = 66 / 6 = 11 person-days. The value 13 is the plain arithmetic mean of the three estimates, and 9 is the most likely estimate on its own."
  },
  {
    ch: 1,
    lo: "FL-1.2.3 (K2)",
    stem: "A business analyst misunderstood a national tax rule and wrote the corresponding requirement incorrectly. The developer implemented the requirement exactly as written. During system testing, an invoice showed 19% VAT where 7% VAT should have been applied.",
    stem2: "Which of the following classifies this situation CORRECTLY?",
    opts: ["The misunderstanding of the tax rule is a defect, the incorrect requirement is an error, and the wrong VAT rate on the invoice is the root cause","The incorrect requirement is the root cause, the wrong VAT rate on the invoice is a defect, and the developer's implementation is a failure","The wrong VAT rate on the invoice is a defect, the incorrect requirement is a failure, and the developer's implementation is an error","The misunderstanding of the tax rule is the root cause, the incorrect requirement is a defect, and the wrong VAT rate on the invoice is a failure"],
    ans: [3],
    just: "A human error (the misunderstanding) is the root cause; it produced a defect in the requirement, which was propagated into the code; the observable deviation from the expected result during execution is the failure."
  },
  {
    ch: 4,
    lo: "FL-4.2.3 (K3)",
    stem: "A car rental system implements the following rules:",
    extra: "<ul><li>A car can be rented only by a customer who holds a valid driving licence</li><li>Customers younger than 25 pay a young-driver surcharge</li><li>Customers holding a loyalty card receive a 10% discount, but this discount is not granted when the young-driver surcharge applies</li></ul><p>The decision table below describes the implemented behaviour:</p><div class=\"figure\"><table class=\"dt\"><tr><th class=\"rowhead\">Conditions</th><th>R1</th><th>R2</th><th>R3</th><th>R4</th><th>R5</th><th>R6</th><th>R7</th><th>R8</th></tr><tr><td class=\"rowhead\">Valid driving licence</td><td>T</td><td>T</td><td>T</td><td>T</td><td>F</td><td>F</td><td>F</td><td>F</td></tr><tr><td class=\"rowhead\">Younger than 25</td><td>T</td><td>T</td><td>F</td><td>F</td><td>T</td><td>T</td><td>F</td><td>F</td></tr><tr><td class=\"rowhead\">Holds loyalty card</td><td>T</td><td>F</td><td>T</td><td>F</td><td>T</td><td>F</td><td>T</td><td>F</td></tr><tr class=\"sect\"><td colspan=\"9\">Actions</td></tr><tr><td class=\"rowhead\">Rental accepted</td><td>X</td><td>X</td><td>X</td><td>X</td><td></td><td></td><td></td><td></td></tr><tr><td class=\"rowhead\">Young-driver surcharge</td><td>X</td><td>X</td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td class=\"rowhead\">10% discount</td><td>X</td><td></td><td>X</td><td></td><td></td><td></td><td></td><td></td></tr></table></div>",
    stem2: "Based ONLY on the rules above, which column of the decision table contradicts the specified behaviour?",
    opts: ["R3","R5","R1","R7"],
    ans: [2],
    just: "R1 describes a customer younger than 25 who holds a loyalty card. The table grants both the young-driver surcharge and the 10% discount, but the specification says the discount is not granted when the surcharge applies. R3, R5 and R7 are all consistent with the rules."
  },
  {
    ch: 5,
    lo: "FL-5.1.5 (K3)",
    stem: "Consider the following test cases for an online shop, with their priorities (a lower number means a higher priority) and their logical dependencies:",
    extra: "<div class=\"figure\"><table class=\"dt\"><tr><th>Test case</th><th class=\"rowhead\">Test condition covered</th><th>Priority</th><th>Depends on</th></tr><tr><td>TC 001</td><td class=\"rowhead\">Create customer account</td><td>2</td><td>none</td></tr><tr><td>TC 002</td><td class=\"rowhead\">Log in</td><td>1</td><td>TC 001</td></tr><tr><td>TC 003</td><td class=\"rowhead\">Add item to basket</td><td>3</td><td>TC 002</td></tr><tr><td>TC 004</td><td class=\"rowhead\">Change password</td><td>2</td><td>TC 002</td></tr><tr><td>TC 005</td><td class=\"rowhead\">Check out basket</td><td>1</td><td>TC 003</td></tr></table></div>",
    stem2: "Which test case should be executed as the THIRD one?",
    opts: ["TC 004","TC 002","TC 003","TC 005"],
    ans: [0],
    just: "TC 001 must run first because everything depends on it. TC 002 is then the only executable test case and also the highest priority, so it runs second. After that TC 003 (priority 3) and TC 004 (priority 2) are both executable, and the higher priority TC 004 runs third."
  },
  {
    ch: 2,
    lo: "FL-2.1.5 (K2)",
    stem: "Which of the following is an example of a shift-left approach?",
    opts: ["Performing beta testing with selected end users after system testing has been completed","Reviewing the acceptance criteria of a user story together with the developers before implementation starts","Running the complete regression suite in a production-like environment shortly before the release","Monitoring the behaviour of the system in production so that defects can be found earlier in the next release"],
    ans: [1],
    just: "Shift left means performing testing activities earlier in the lifecycle, such as reviewing requirements and acceptance criteria before any code is written. The other options all take place late in the lifecycle or after release."
  },
  {
    ch: 3,
    lo: "FL-3.2.2 (K2)",
    stem: "During which activity of the review process are the findings of the individual reviewers collected and discussed, and decisions taken on each of them?",
    opts: ["Planning","Individual review","Fixing and reporting","Communication and analysis"],
    ans: [3],
    just: "In communication and analysis the anomalies found during individual review are communicated, discussed, and each is given a status such as defect, improvement or no action needed. Planning defines scope and criteria, individual review produces the findings, and fixing and reporting handles the agreed corrections."
  },
  {
    ch: 4,
    lo: "FL-4.2.4 (K3)",
    stem: "The lifecycle of a customer contract is modelled by the state transition diagram below. The initial state is NEW; REJECTED and CLOSED are final states.",
    fig: "contract-states",
    stem2: "What is the MINIMAL number of test cases needed to achieve 100% valid transitions coverage, if every test case starts in NEW and ends in a final state?",
    opts: ["2","4","3","6"],
    ans: [2],
    just: "There are six valid transitions. The transition NEW &rarr; REJECTED ends the test immediately, so it needs its own test case. The transitions SUSPENDED &rarr; CLOSED and ACTIVE &rarr; CLOSED both end in a final state and therefore cannot appear in the same test case. Three test cases are enough, for example: (1) reject; (2) approve, suspend, reactivate, close; (3) approve, suspend, close."
  },
  {
    ch: 1,
    lo: "FL-1.2.2 (K1)",
    stem: "Which of the following statements BEST distinguishes quality assurance (QA) from quality control (QC)?",
    opts: ["QA is performed by an independent team, while QC is always performed by the development team","QA is process-oriented and focuses on the implementation of good processes, while QC is product-oriented and focuses on reaching an appropriate level of quality","QA consists of the corrective actions taken after failures are observed, while QC consists of the preventive actions","QA covers both static and dynamic testing, while QC covers dynamic testing only"],
    ans: [1],
    just: "QA is a process-oriented, preventive approach that aims at building the product right by improving the processes. QC is product-oriented and corrective, and testing is one of its activities. Independence and the static/dynamic split are unrelated to this distinction."
  },
  {
    ch: 5,
    lo: "FL-5.1.7 (K2)",
    stem: "Consider the following test categories (1-4) and agile testing quadrants (A-D):",
    match: {"items":["Exploratory testing","Component integration testing","Performance efficiency testing","Business-facing functional tests written with the product owner"],"cats":["Quadrant Q1: technology facing, supporting the team","Quadrant Q2: business facing, supporting the team","Quadrant Q3: business facing, critique the product","Quadrant Q4: technology facing, critique the product"]},
    stem2: "How do these test categories map onto the agile testing quadrants?",
    opts: ["1D, 2A, 3C, 4B","1C, 2B, 3D, 4A","1B, 2A, 3D, 4C","1C, 2A, 3D, 4B"],
    ans: [3],
    just: "Exploratory testing is business facing and critiques the product (Q3). Component integration testing is technology facing and supports the team (Q1). Performance efficiency testing is technology facing and critiques the product (Q4). Business-facing functional tests agreed with the product owner support the team (Q2)."
  },
  {
    ch: 4,
    lo: "FL-4.3.1 / 4.3.2 (K2)",
    stem: "Consider the following pseudocode:",
    code: "1   READ x\n2   READ y\n3   IF x &gt; 0 THEN\n4       z = x\n5   ELSE\n6       z = 0\n7   END IF\n8   IF y &gt; 10 THEN\n9       z = z + y\n10  END IF\n11  PRINT z",
    stem2: "Two test cases are executed: TC1 with x = 5, y = 20 and TC2 with x = -3, y = 20. What coverage do these two test cases achieve together?",
    opts: ["100% statement coverage and 75% branch coverage","100% statement coverage and 100% branch coverage","75% statement coverage and 100% branch coverage","100% statement coverage and 50% branch coverage"],
    ans: [0],
    just: "Together the two test cases execute every executable statement, so statement coverage is 100%. There are four branches: both outcomes of the first decision are taken, but the second decision (y &gt; 10) is only ever true, so three of four branches are exercised, that is 75% branch coverage."
  },
  {
    ch: 2,
    lo: "FL-2.2.2 (K2)",
    stem: "A defect in the payment module has been fixed. The team re-executes the test case that originally exposed the defect and, in addition, executes the test cases covering the invoicing module, which shares a library with the payment module.",
    stem2: "Which of the following describes these two sets of tests CORRECTLY?",
    opts: ["Both sets are confirmation tests","Re-executing the test case that exposed the defect is regression testing, and executing the invoicing tests is confirmation testing","Re-executing the test case that exposed the defect is confirmation testing, and executing the invoicing tests is regression testing","Both sets are maintenance tests, because they are executed after a change"],
    ans: [2],
    just: "Confirmation testing re-executes the failing test to verify that the defect has been fixed. Regression testing executes other tests to detect unintended side effects of the change in parts of the software that were not modified, such as the invoicing module sharing the library."
  },
  {
    ch: 3,
    lo: "FL-3.2.4 (K2)",
    stem: "The reviews carried out in your organization have the following characteristics: the main purpose is to detect potential defects and evaluate quality; every participant prepares individually; the meeting is led by a trained moderator and not by the author; metrics are collected and used to improve the software development process; a formal follow-up takes place.",
    stem2: "Which review type is MOST likely being used?",
    opts: ["Informal review","Inspection","Walkthrough","Technical review"],
    ans: [1],
    just: "The combination of a trained moderator who is not the author, defined roles, individual preparation, metrics collection for process improvement and formal follow-up characterizes an inspection, the most formal review type. A walkthrough is led by the author, and a technical review is led by a moderator but focuses on technical decisions and does not require this level of formality."
  },
  {
    ch: 1,
    lo: "FL-1.3.1 (K2)",
    stem: "Your team has executed the same set of 250 automated regression tests every night for the last nine months. All of them still pass, yet users keep reporting production incidents in exactly the areas these tests cover.",
    stem2: "Which testing principle BEST explains this situation?",
    opts: ["Tests wear out","Testing shows the presence, not the absence, of defects","Defects cluster together","Testing is context dependent"],
    ans: [0],
    just: "Repeating the same tests unchanged means they stop finding new defects, because the defects they were able to reveal have already been found. The remedy is to review and revise the tests regularly and add new ones. The other principles are true statements but do not explain why an unchanged test set loses its effectiveness."
  },
  {
    ch: 4,
    lo: "FL-4.3.3 (K2)",
    stem: "Which of the following is NOT a benefit of white-box test techniques?",
    opts: ["White-box coverage metrics can identify the additional tests needed to increase code coverage","White-box testing can reveal parts of the code that are not exercised by tests derived from the specification","White-box testing provides objective evidence of how thoroughly the code structure has been tested","White-box testing confirms that all specified requirements have been implemented correctly"],
    ans: [3],
    just: "White-box techniques measure and exercise the structure of the code that exists; they cannot show that a requirement was implemented or, in particular, that a requirement was forgotten, since missing code cannot be covered. The other three are genuine benefits."
  },
  {
    ch: 5,
    lo: "FL-5.2.4 (K2)",
    stem: "During product risk analysis the following risk was identified: <em>orders may be lost when more than 2000 users are connected at the same time</em>. The likelihood was assessed as high and the impact as high. The team decided that an independent test team will perform performance efficiency testing during system testing, and that a fallback procedure for re-entering lost orders manually will be documented and rehearsed with the support staff.",
    stem2: "Which risk control measures have been chosen?",
    opts: ["Risk mitigation only","Risk acceptance and risk transfer","Risk mitigation and contingency plan","Risk transfer and contingency plan"],
    ans: [2],
    just: "Performing performance efficiency testing reduces the likelihood that the risk materializes, which is mitigation. Preparing and rehearsing a manual fallback procedure reduces the impact if it does materialize anyway, which is a contingency plan. Nothing here transfers the risk to another party or simply accepts it."
  },
  {
    ch: 6,
    lo: "FL-6.2.1 (K1)",
    stem: "Which of the following is a RISK of using test automation?",
    opts: ["The effort required to maintain the automated tests may be underestimated","The automated tests can be executed far more often than manual tests","Automated tests deliver objective and repeatable results","Automation reduces the time needed to execute the regression test suite"],
    ans: [0],
    just: "Testware needs maintaining whenever the test object changes, and underestimating that effort is one of the classic risks of automation. The other options all describe benefits of automation, not risks."
  },
  {
    ch: 2,
    lo: "FL-2.3.1 (K2)",
    stem: "Which of the following situations would MOST likely trigger maintenance testing?",
    opts: ["A new user story is added to the backlog of the current iteration of a system still under development","A component test suite is created for a newly written component before it is integrated","The test manager decides to increase the level of test independence in the project","The operating system of the servers hosting a system that has been in production for two years is upgraded"],
    ans: [3],
    just: "Maintenance testing is performed on an operational system when it is changed, migrated or retired, and an environment upgrade such as a new operating system version is a typical trigger. The other options describe activities on a system that is still under development, or an organizational decision."
  },
  {
    ch: 4,
    lo: "FL-4.4.2 (K2)",
    stem: "Which of the following BEST describes exploratory testing?",
    opts: ["Tests are designed in advance from a checklist and then executed exactly as specified","Test design, test execution and learning happen in parallel, usually in time-boxed sessions guided by a test charter","Tests are derived from the code structure by the developer who wrote the component","The tester clicks through the application at random and records nothing"],
    ans: [1],
    just: "In exploratory testing the tester designs, executes and evaluates tests at the same time, learning about the test object as they go, typically within a time-boxed session steered by a test charter and documented in session sheets. It is neither unstructured nor undocumented."
  },
  {
    ch: 1,
    lo: "FL-1.4.1 (K2)",
    stem: "Which TWO of the following tasks are performed during test implementation?",
    multi: true,
    opts: ["Creating test suites from the available test procedures","Identifying the features to be tested and defining the test conditions","Deriving test cases and test data from the test conditions","Building the test environment and verifying that it has been set up correctly","Comparing actual results with expected results and reporting anomalies"],
    ans: [0,3],
    just: "Test implementation prepares everything needed to run the tests: creating test suites, arranging the testware, and building and verifying the test environment. Identifying the features and test conditions belongs to test analysis, deriving test cases and test data belongs to test design, and comparing actual with expected results belongs to test execution."
  },
  {
    ch: 5,
    lo: "FL-5.3.2 (K2)",
    stem: "Which information is MOST appropriate for a test progress report addressed to project stakeholders during test execution?",
    opts: ["The detailed steps of every test procedure that failed","The complete list of test scripts held in the configuration management system","The status of testing against the agreed exit criteria, including test progress, defect status and product risk status","The technical root cause of every defect found so far"],
    ans: [2],
    just: "A test progress report tells the stakeholders where testing stands against the plan and the exit criteria, and which risks and defects affect the release decision. Test procedure steps, script inventories and root cause analyses are working detail for the team, not stakeholder reporting."
  },
  {
    ch: 3,
    lo: "FL-3.2.3 (K1)",
    stem: "Which of the following tasks belongs to the review leader (moderator)?",
    opts: ["Scheduling the review activities and mediating between the participants during the meeting","Creating the work product under review and offering to fix the defects that were found","Recording the anomalies found and the decisions taken during the review meeting","Deciding that reviews shall be executed and allocating budget and time for them"],
    ans: [0],
    just: "The review leader plans and schedules the review activities and mediates between the participants so that the review objectives are met. Creating the work product is the author's role, recording the anomalies and decisions is the scribe's, and deciding that reviews shall be executed and funding them is the manager's."
  },
  {
    ch: 4,
    lo: "FL-4.4.1 (K2)",
    stem: "Which of the following is the BEST example of applying error guessing?",
    opts: ["A tester systematically derives the test cases from a decision table","A tester who knows that division by zero has repeatedly caused defects in similar systems tests the calculation with a divisor of 0","A tester uses a standard checklist of usability heuristics to evaluate the user interface","A tester re-runs an existing test set on a new version of the software to check for regressions"],
    ans: [1],
    just: "Error guessing anticipates the errors, defects and failures that are likely to occur, based on the tester's knowledge of how the application worked in the past, what kind of errors developers tend to make, and failures observed in similar systems. The other options describe a black-box technique, checklist-based testing and regression testing."
  },
  {
    ch: 1,
    lo: "FL-1.4.4 (K2)",
    stem: "Which of the following is the BEST example of the value of traceability between the test basis and the test work products?",
    opts: ["It allows the test manager to identify which testers wrote the most test cases","It guarantees that 100% of the code has been exercised by the executed tests","It reduces the number of test cases needed to reach the agreed coverage criteria","It makes it possible to determine which requirements are affected when a test case fails, and to report test progress in business terms"],
    ans: [3],
    just: "Traceability supports impact analysis, coverage assessment against the test basis, and reporting test results in terms the stakeholders understand. It says nothing about who wrote which test case, it does not measure code coverage, and it does not reduce the number of test cases needed."
  },
  {
    ch: 5,
    lo: "FL-5.4.1 (K2)",
    stem: "Which of the following is supported by configuration management in testing?",
    opts: ["It guarantees that the test environment behaves identically to the production environment","It defines the entry and exit criteria for each test level","It ensures that the test object and all testware are uniquely identified, version controlled and traceable throughout the test process","It determines which test cases should be automated first"],
    ans: [2],
    just: "Configuration management establishes and maintains the integrity of the test object and the testware by identifying, versioning and controlling them, so that test results can be traced back to a known version. The other options belong to environment management, test planning and automation strategy."
  },
  {
    ch: 4,
    lo: "FL-4.5.2 (K2)",
    stem: "Which of the following is the BEST reason for defining acceptance criteria for a user story?",
    opts: ["They define the scope of the user story and give an objective basis for deciding whether it is complete","They allow the team to measure the code coverage achieved by the acceptance tests","They remove the need for a test plan in agile projects","They allow the product owner to estimate the effort needed to implement the user story"],
    ans: [0],
    just: "Acceptance criteria describe the conditions the implementation must satisfy, so they bound the scope of the story, support negotiation between the team and the stakeholders, and provide the basis for acceptance tests and for the definition of done."
  },
  {
    ch: 1,
    lo: "FL-1.5.3 (K2)",
    stem: "Which of the following is a DISADVANTAGE of a high level of test independence?",
    opts: ["Testers are less likely to be influenced by the assumptions made by the authors of the work products","Testers may become isolated from the development team, which delays feedback and causes communication problems","Testers may find defects that the developers are blind to because of their familiarity with the code","Testers can verify assumptions that were made during the specification and implementation of the system"],
    ans: [1],
    just: "Independence brings valuable objectivity, but taken too far it isolates the testers, slowing feedback, weakening collaboration and sometimes turning testing into a bottleneck. The other options all describe advantages of independence."
  },
  {
    ch: 5,
    lo: "FL-5.5.1 (K3)",
    stem: "Consider the following defect report:",
    extra: "<div class=\"figure\"><table class=\"dt\"><tr><td class=\"rowhead\" style=\"text-align:left\">DEF-0871</td><td class=\"rowhead\" style=\"text-align:left\">2026-03-14 &middot; Anna Weber &middot; status: New</td></tr><tr><td class=\"rowhead\" style=\"text-align:left\">Severity: high</td><td class=\"rowhead\" style=\"text-align:left\">Priority: high</td></tr></table></div><p style=\"font-style:italic\">Search returns no results. When the article number AB-1200 is entered in the search field of the product catalogue, the result list stays empty. The expected result is that the article AB-1200 appears in the result list. The behaviour was reproduced in all three attempts. Related to requirement REQ-0345 and test case TC-2210.</p>",
    stem2: "Which critical information is MISSING from this defect report?",
    opts: ["The unique identifier and the date of the report","The expected result and the actual result","The degree of impact on the stakeholder and the urgency of the fix","The identification of the test item, including its version, and the test environment"],
    ans: [3],
    just: "The report identifies itself, dates itself, gives expected and actual result, severity and priority, and references the test basis and test case. What a developer cannot tell from it is which version of the software was tested and in which environment, so the defect may not be reproducible on their side."
  },
  {
    ch: 4,
    lo: "FL-4.5.3 (K3)",
    stem: "Consider the following user story:",
    extra: "<p style=\"font-style:italic;padding-left:1.2rem\">As a registered customer<br>I want to save my payment card in my profile<br>so that I do not have to enter it again for every order</p><p>and its acceptance criteria:</p><ul><li>The customer can add a payment card to the profile</li><li>Only the last four digits of a saved card are displayed</li><li>A customer can save at most three payment cards</li><li>The customer can delete a saved card</li><li>Saving a card requires the customer to be logged in</li></ul>",
    stem2: "Which of the following is the BEST example of an acceptance test-driven development (ATDD) test for this user story?",
    opts: ["Test that the database table storing the cards is indexed on the customer identifier","Test that the customer can change the delivery address stored in the profile","Test that a logged-in customer who has already saved three cards cannot save a fourth one","Test that the full card number is shown when the customer opens the profile page"],
    ans: [2],
    just: "An ATDD test is derived directly from an acceptance criterion of the story. Checking that a customer who has already saved three cards cannot save a fourth covers the criterion limiting a customer to three cards. Indexing a database table is a design detail outside the story, changing the delivery address belongs to a different story, and showing the full card number contradicts the criterion that only the last four digits are displayed."
  }
   ]
  },
  {
   id: "m2",
   name: "Set M2",
   blurb: "40 further questions, same blueprint",
   questions: [
  {
    ch: 1,
    lo: "FL-1.1.1 (K1)",
    stem: "Which of the following is NOT a typical objective of testing?",
    opts: ["Building confidence in the level of quality of the test object","Finding defects and failures so that they can be reported and corrected","Correcting the defects that have been found in the test object","Reducing the level of risk of inadequate software quality"],
    ans: [2],
    just: "Testing evaluates the test object and reports what it finds; correcting a defect is a development activity that follows debugging. Building confidence, finding defects and reducing the risk of inadequate quality are all typical test objectives."
  },
  {
    ch: 4,
    lo: "FL-4.1.1 (K2)",
    stem: "Which of the following statements about the choice of test techniques is CORRECT?",
    opts: ["The choice depends on factors such as the type of component or system, the identified risks, the available documentation and the skills of the testers","Black-box techniques should always be preferred over white-box techniques","The choice is determined solely by the test level that is being executed","Experience-based techniques should be used only when no requirements are available"],
    ans: [0],
    just: "There is no universally best technique. The selection is driven by the context: the nature of the test object, regulatory requirements, the risks involved, the test objectives, the documentation available, the tester's knowledge and the time and budget at hand."
  },
  {
    ch: 2,
    lo: "FL-2.1.2 (K1)",
    stem: "Which TWO of the following are good testing practices that apply to every software development lifecycle?",
    multi: true,
    opts: ["All testing should be fully automated before the first release","Every test level should have specific and appropriate test objectives","Test design should start only once the code is complete","Every test level must be executed by an independent test team","Testers should be involved in reviewing work products as soon as drafts are available"],
    ans: [1,4],
    just: "Defining specific objectives for each test level avoids gaps and redundant testing, and reviewing drafts early gives the fastest feedback. Full automation before the first release is unrealistic, test design can start as soon as the test basis exists, and the appropriate degree of independence varies with the context."
  },
  {
    ch: 5,
    lo: "FL-5.1.1 (K2)",
    stem: "Which of the following BEST describes the purpose of a test plan?",
    opts: ["It records the result of every test case that has been executed","It documents the means and the schedule for achieving the test objectives, and helps to check whether they are being met","It defines the internal structure of the automated test framework","It lists every defect that has to be fixed before the release"],
    ans: [1],
    just: "A test plan describes how the test objectives will be reached within the given constraints, and it serves as the reference against which progress is monitored. Results, framework design and defect lists are recorded elsewhere."
  },
  {
    ch: 3,
    lo: "FL-3.1.3 (K2)",
    stem: "Which of the following statements about static and dynamic testing is CORRECT?",
    opts: ["Static testing can only be applied to code, whereas dynamic testing can be applied to any work product","Both static testing and dynamic testing require the software to be executed","Dynamic testing is always cheaper than static testing, because it can be automated","Static testing finds defects directly, whereas dynamic testing causes failures from which the defects then have to be diagnosed"],
    ans: [3],
    just: "Static testing examines the work product itself, so an anomaly found is the defect. Dynamic testing observes a failure, and the defect that caused it still has to be located. Static testing applies to many work products, not only code, and neither approach is inherently cheaper."
  },
  {
    ch: 4,
    lo: "FL-4.2.1 (K3)",
    stem: "A ticketing system prices a ticket according to the age of the visitor, given as a whole number of years:",
    extra: "<ul><li>0 to 5 years: free</li><li>6 to 17 years: youth</li><li>18 to 64 years: adult</li><li>65 years and above: senior</li></ul><p>The highest age the system accepts is 120. Negative ages and ages above 120 are rejected.</p>",
    stem2: "How many equivalence partitions, valid and invalid together, exist for the age input?",
    opts: ["4","5","6","8"],
    ans: [2],
    just: "There are four valid partitions, one for each price category, and two invalid partitions: ages below 0 and ages above 120. That gives six equivalence partitions in total."
  },
  {
    ch: 1,
    lo: "FL-1.1.2 (K2)",
    stem: "A component test fails. Which of the following describes the subsequent activities CORRECTLY?",
    opts: ["Confirmation testing reproduces the failure and diagnoses the defect; debugging then checks that the fix resolved it","Debugging reproduces the failure, diagnoses the defect and fixes it; confirmation testing then checks that the failure no longer occurs","Regression testing diagnoses the defect; debugging then confirms that the fix resolved the failure","Debugging reproduces the failure; regression testing then checks that the fix resolved the failure"],
    ans: [1],
    just: "Debugging is the development activity that reproduces the failure, finds its cause and corrects it. Once the fix is available, testers run the failing test again, which is confirmation testing. Regression testing is a separate activity that looks for unintended side effects of the change."
  },
  {
    ch: 5,
    lo: "FL-5.1.2 (K1)",
    stem: "How does a tester contribute to release planning?",
    opts: ["By deciding which user stories will be included in the release","By approving the release on behalf of the business","By writing the code for the highest-risk user stories first","By helping to define testable user stories with acceptance criteria, and by taking part in risk identification and effort estimation"],
    ans: [3],
    just: "Testers bring a quality and risk perspective into planning: they help make stories testable, identify product risks, and estimate the test effort. Deciding the content of a release and accepting it on behalf of the business are the product owner's responsibilities."
  },
  {
    ch: 6,
    lo: "FL-6.1.1 (K2)",
    stem: "Which category of test tools MOST directly supports test monitoring and control?",
    opts: ["Test management tools","Test data preparation tools","Static analysis tools","Performance testing tools"],
    ans: [0],
    just: "Test management tools hold the test cases, the execution status and the links to requirements and defects, and produce the progress information that monitoring and control depend on. The other categories support test design, static testing and non-functional test execution."
  },
  {
    ch: 4,
    lo: "FL-4.2.2 (K3)",
    stem: "The same ticketing system accepts a whole-number age from 0 to 120, and the youth price applies to ages from 6 to 17 inclusive.",
    stem2: "Applying 3-value boundary value analysis to the youth partition, which set of test values should be used?",
    opts: ["6 and 17","5, 6, 17 and 18","5, 6, 7, 16, 17 and 18","0, 5, 6, 17, 18 and 120"],
    ans: [2],
    just: "Three-value boundary value analysis uses each boundary value together with its two neighbours. The youth partition has the boundary values 6 and 17, which gives 5, 6, 7 for the lower boundary and 16, 17, 18 for the upper one."
  },
  {
    ch: 2,
    lo: "FL-2.1.4 (K2)",
    stem: "Which of the following is a benefit of DevOps from a testing perspective?",
    opts: ["It removes the need for a test approach, because releases are small and frequent","It makes regression testing unnecessary, because each change is small","It moves responsibility for the quality of the product to the operations team","An automated build, deploy and test pipeline gives fast feedback on the quality of every change"],
    ans: [3],
    just: "Continuous integration and delivery run the automated tests against every change, so defects are found within minutes rather than weeks. Frequent small releases increase rather than remove the need for regression testing, and quality remains a shared responsibility."
  },
  {
    ch: 3,
    lo: "FL-3.2.1 (K1)",
    stem: "Which of the following is a benefit of early and frequent stakeholder feedback?",
    opts: ["It removes the need for acceptance testing before the release","Misunderstood stakeholder requirements can be identified and corrected before they are implemented","It guarantees that the project will be delivered within the agreed budget","It transfers responsibility for the quality of the product to the stakeholders"],
    ans: [1],
    just: "Early and frequent feedback communicates what the stakeholders actually need while changing course is still cheap, so effort is not spent building the wrong thing. It neither replaces later test activities nor shifts responsibility for quality."
  },
  {
    ch: 5,
    lo: "FL-5.1.6 (K1)",
    stem: "What does the test pyramid express?",
    opts: ["The lower the test level, the larger the number of tests should be and the faster they run","The higher the test level, the larger the number of tests should be","The order in which the test levels have to be executed","That every layer should contain the same number of tests"],
    ans: [0],
    just: "The pyramid recommends many small, fast, isolated tests at the bottom, typically unit tests, and progressively fewer and slower tests as the scope of each test grows, with end-to-end tests at the top. It says nothing about the order of execution."
  },
  {
    ch: 1,
    lo: "FL-1.2.1 (K2)",
    stem: "Which of the following is an example of how testing contributes to success?",
    opts: ["Test automation guarantees that the delivered software will contain no defects","Involving testers only at the end of the project keeps them objective and therefore improves the product","Certifying every member of the test team ensures that the product will be of higher quality","Testers involved in reviewing requirements can find ambiguities before they are implemented, which reduces the cost of change"],
    ans: [3],
    just: "Testers who take part in reviews find defects in the requirements before any code is written, and defects removed early are far cheaper to fix. No amount of testing or certification can guarantee an absence of defects, and involving testers late removes exactly the early feedback that creates the benefit."
  },
  {
    ch: 4,
    lo: "FL-4.2.3 (K3)",
    stem: "A library lending system implements the following rules: a book cannot be lent to a member whose account has an unpaid fine; an ordinary member may have at most five books on loan; a reading club member may have at most eight. The decision table below describes the implemented behaviour.",
    extra: "<div class=\"figure\"><table class=\"dt\"><tr><th class=\"rowhead\">Conditions</th><th>R1</th><th>R2</th><th>R3</th><th>R4</th><th>R5</th><th>R6</th><th>R7</th><th>R8</th></tr><tr><td class=\"rowhead\">Unpaid fine on the account</td><td>T</td><td>T</td><td>T</td><td>T</td><td>F</td><td>F</td><td>F</td><td>F</td></tr><tr><td class=\"rowhead\">Reading club member</td><td>T</td><td>T</td><td>F</td><td>F</td><td>T</td><td>T</td><td>F</td><td>F</td></tr><tr><td class=\"rowhead\">Five or more books already on loan</td><td>T</td><td>F</td><td>T</td><td>F</td><td>T</td><td>F</td><td>T</td><td>F</td></tr><tr class=\"sect\"><td colspan=\"9\">Actions</td></tr><tr><td class=\"rowhead\">Loan granted</td><td></td><td></td><td></td><td></td><td>X</td><td>X</td><td></td><td>X</td></tr><tr><td class=\"rowhead\">Loan refused</td><td>X</td><td>X</td><td>X</td><td>X</td><td></td><td></td><td>X</td><td></td></tr></table></div>",
    stem2: "A reading club member who has no unpaid fine and already has six books on loan tries to borrow another book. Which rule applies, and what is the outcome?",
    opts: ["Rule R5, and the loan is refused","Rule R3, and the loan is refused","Rule R5, and the loan is granted","Rule R7, and the loan is granted"],
    ans: [2],
    just: "The member has no unpaid fine, is a reading club member and already has five or more books on loan, which is the column with the condition values false, true, true. That is R5, and because a reading club member may hold up to eight books the loan is granted."
  },
  {
    ch: 5,
    lo: "FL-5.2.2 (K2)",
    stem: "Which of the following is a PROJECT risk rather than a product risk?",
    opts: ["Key testers may leave the team before system testing has been completed","The system may calculate interest incorrectly in a leap year","The system may not respond within three seconds under peak load","The user interface may be unusable for visually impaired users"],
    ans: [0],
    just: "Project risks threaten the management and control of the project itself, such as the availability of skills, the schedule or the supplier. The other three options describe possible weaknesses in the delivered product and are therefore product risks."
  },
  {
    ch: 2,
    lo: "FL-2.2.1 (K2)",
    stem: "You are evaluating how easily a first-time user can complete a purchase, and you do so on the fully integrated system in a production-like environment.",
    stem2: "Which test level and test type does this describe?",
    opts: ["System testing, and a functional test type","System testing, and a non-functional test type","Acceptance testing, and a functional test type","Component integration testing, and a non-functional test type"],
    ans: [1],
    just: "The test object is the complete integrated system, which places the testing at system test level. Usability is a quality characteristic describing how well the system does what it does, so this is a non-functional test type."
  },
  {
    ch: 3,
    lo: "FL-3.2.5 (K3)",
    stem: "You have been asked to review a requirements specification against a list of typical requirement problems: ambiguous wording, missing acceptance criteria, untestable statements and duplication.",
    stem2: "Which review technique are you applying?",
    opts: ["Ad hoc reviewing","Scenario-based reviewing","Checklist-based reviewing","Role-based reviewing"],
    ans: [2],
    just: "Working through a predefined list of question types or known problem categories is checklist-based reviewing. Ad hoc reviewing gives the reviewer no guidance, scenario-based reviewing walks the work product through expected usage, and role-based reviewing evaluates it from the viewpoint of a particular stakeholder."
  },
  {
    ch: 4,
    lo: "FL-4.2.4 (K3)",
    stem: "The login behaviour of a system is described by the state table below. A dash means that the event is not accepted in that state.",
    extra: "<div class=\"figure\"><table class=\"dt\"><tr><th class=\"rowhead\">State</th><th>correct password</th><th>third wrong password</th><th>logout</th></tr><tr><td class=\"rowhead\">LOGGED OUT</td><td>LOGGED IN</td><td>LOCKED</td><td>&ndash;</td></tr><tr><td class=\"rowhead\">LOGGED IN</td><td>&ndash;</td><td>&ndash;</td><td>LOGGED OUT</td></tr><tr><td class=\"rowhead\">LOCKED</td><td>&ndash;</td><td>&ndash;</td><td>&ndash;</td></tr></table></div>",
    stem2: "How many invalid transitions does this state table contain?",
    opts: ["6","3","5","9"],
    ans: [0],
    just: "The table has three states and three events, so there are nine possible state and event combinations. Three of them lead to a defined transition, so the remaining six are invalid transitions."
  },
  {
    ch: 1,
    lo: "FL-1.2.4 (K2)",
    stem: "Why is root cause analysis of defects performed?",
    opts: ["To determine which tester should have found the defect earlier","To identify and remove the underlying reason a defect occurred, so that similar defects can be prevented in future","To calculate the residual risk that remains after the defect has been fixed","To decide the order in which the open defects should be fixed"],
    ans: [1],
    just: "Root cause analysis looks past the individual defect to the process weakness that allowed it, so that process improvement can prevent whole classes of defect. It is a process improvement activity, not a way of assigning blame or of prioritizing fixes."
  },
  {
    ch: 5,
    lo: "FL-5.2.3 (K2)",
    stem: "What is the MAIN purpose of product risk analysis in testing?",
    opts: ["To assign responsibility for each defect to a member of the team","To calculate the total cost of the project","To decide which developer should implement which user story","To determine the scope, the depth and the priority of the testing to be performed"],
    ans: [3],
    just: "Product risk analysis identifies what could go wrong in the product and how serious it would be, and this drives what is tested, how thoroughly and in what order. It also supports the choice of test techniques and the reporting of residual risk."
  },
  {
    ch: 4,
    lo: "FL-4.3.1 (K2)",
    stem: "Consider the following pseudocode:",
    code: "1  READ a\n2  IF a &lt; 0 THEN\n3      a = -a\n4  END IF\n5  IF a &gt; 100 THEN\n6      PRINT \"large\"\n7  ELSE\n8      PRINT \"small\"\n9  END IF",
    stem2: "What is the MINIMAL number of test cases needed to achieve 100% statement coverage?",
    opts: ["1","3","2","4"],
    ans: [2],
    just: "One test case with a negative value that becomes greater than 100 after the sign is changed, for example -200, executes the statement inside the first decision and the statement that prints the large result. A second test case with a small positive value, for example 5, executes the remaining statement. No single test case can execute both print statements, so two are needed."
  },
  {
    ch: 2,
    lo: "FL-2.1.6 (K2)",
    stem: "Which of the following is a typical benefit of retrospectives from a testing perspective?",
    opts: ["A guaranteed reduction in the number of defects that escape to production","Increased test effectiveness and efficiency, for example by improving the test process and the testware","A formal record of which team member introduced each defect","An objective basis for deciding which testers should be promoted"],
    ans: [1],
    just: "Retrospectives identify what worked and what did not, and produce concrete improvement actions such as better test data, faster feedback or clearer acceptance criteria. They are a process improvement mechanism, not a guarantee of results and not a performance appraisal."
  },
  {
    ch: 3,
    lo: "FL-3.2.2 (K2)",
    stem: "Which of the following is performed during the planning activity of a review?",
    opts: ["Distributing the work product and explaining the objectives to the participants","Logging the anomalies that each reviewer has found","Correcting the defects that were found and reporting the corrections","Defining the scope of the review, and the entry and exit criteria for the more formal review types"],
    ans: [3],
    just: "Planning establishes the purpose and scope of the review, selects the participants, allocates roles and, for formal review types, defines entry and exit criteria. Distributing the work product belongs to initiate review, logging anomalies to individual review and communication and analysis, and correcting defects to fixing and reporting."
  },
  {
    ch: 1,
    lo: "FL-1.3.1 (K2)",
    stem: "A tester observes that 70% of the defects found so far in a large system are located in two of its twelve modules, and proposes to concentrate further testing effort on those two modules.",
    stem2: "Which testing principle supports this proposal?",
    opts: ["Defects cluster together","Testing is context dependent","Testing shows the presence, not the absence, of defects","Early testing saves time and money"],
    ans: [0],
    just: "A small number of modules usually contains most of the defects, so the observed distribution is a useful predictor of where further defects will be found. This is the basis of risk-based and focused testing."
  },
  {
    ch: 4,
    lo: "FL-4.3.2 (K2)",
    stem: "Which of the following statements about statement coverage and branch coverage is CORRECT?",
    opts: ["Achieving 100% statement coverage implies 100% branch coverage","The two criteria are equivalent for any structured code","Achieving 100% branch coverage implies 100% statement coverage, but not the other way round","Neither of the two criteria can be measured automatically"],
    ans: [2],
    just: "Every branch that is taken executes the statements on it, so full branch coverage necessarily executes every reachable statement. The reverse does not hold: a decision with an empty alternative can have all its statements executed without both outcomes ever being taken."
  },
  {
    ch: 5,
    lo: "FL-5.3.1 (K1)",
    stem: "Which TWO of the following are examples of metrics used in test monitoring and control?",
    multi: true,
    opts: ["The number of defects found, fixed and still open","The number of hours of training that the testers received","The number of user stories currently in the product backlog","The percentage of the planned test cases that have been executed","The number of developers assigned to the team"],
    ans: [0,3],
    just: "Test monitoring uses metrics about the progress of the testing and about the defects found, such as execution progress against plan and open defect counts by severity. Training hours, backlog size and team size describe the project, not the state of testing."
  },
  {
    ch: 6,
    lo: "FL-6.2.1 (K1)",
    stem: "Which of the following is a benefit of test automation?",
    opts: ["It removes the need to maintain the testware","It guarantees that all defects will be found before the release","It removes the need for experienced testers","More consistent and repeatable test execution, and an objective assessment of coverage"],
    ans: [3],
    just: "Automated tests run the same way every time and can report coverage objectively, and they free tester time for work that needs human judgement. Automated testware still has to be maintained, automation finds no defects that its tests do not look for, and it needs skilled people to build it."
  },
  {
    ch: 2,
    lo: "FL-2.3.1 (K2)",
    stem: "What determines the scope of maintenance testing?",
    opts: ["The number of testers available in the maintenance team","The degree of risk of the change, the size of the existing system and the size of the change","The test techniques that were used during the original development","The number of defects that were found during the original acceptance testing"],
    ans: [1],
    just: "The scope depends on how risky the change is, how large the system that could be affected is, and how large the change itself is. Impact analysis is used to decide how much regression testing the change requires."
  },
  {
    ch: 4,
    lo: "FL-4.4.3 (K2)",
    stem: "Which of the following is a characteristic of checklist-based testing?",
    opts: ["Tests are designed, implemented and executed to cover the conditions on a list derived from experience, standards or known risks","Tests are derived from the internal structure of the test object to reach a defined level of coverage","Test design and test execution happen at the same time within a time-boxed session","Every possible combination of input values is covered systematically"],
    ans: [0],
    just: "In checklist-based testing the tester works through a list of items to be checked, typically built from experience, from what matters to the user, or from known failure patterns. The other options describe white-box testing, exploratory testing and exhaustive testing."
  },
  {
    ch: 1,
    lo: "FL-1.4.3 (K2)",
    stem: "Which work products are produced by the test design activity?",
    opts: ["Test conditions and the features to be tested","Test suites and the test execution schedule","The test completion report and the lessons learned","Test cases, test data requirements and the coverage items to be exercised"],
    ans: [3],
    just: "Test design turns the test conditions produced by test analysis into test cases and other testware, and identifies the coverage items and the test data needed. Test conditions come from test analysis, test suites and schedules from test implementation, and the completion report from test completion."
  },
  {
    ch: 5,
    lo: "FL-5.3.2 (K2)",
    stem: "When is a test completion report typically produced?",
    opts: ["Every day during test execution","Whenever a defect with high severity is found","When a test level, an iteration or a test project reaches its exit criteria","Before the test plan has been approved"],
    ans: [2],
    just: "The test completion report summarizes what was done and what the results mean once a milestone is reached, such as the end of a test level, an iteration or the whole project. Day-to-day information is communicated through test progress reports."
  },
  {
    ch: 3,
    lo: "FL-3.2.3 (K1)",
    stem: "During a formal review, who is responsible for recording the anomalies that are found and the decisions that are taken?",
    opts: ["The scribe","The review leader","The author","The manager"],
    ans: [0],
    just: "The scribe collects the anomalies from the participants and records the information needed during the review meeting, including the decisions taken on each finding. The review leader runs the review, the author owns the work product, and the manager decides that reviews shall be held and allocates the effort."
  },
  {
    ch: 4,
    lo: "FL-4.4.1 (K2)",
    stem: "Which of the following is a DISADVANTAGE of experience-based test techniques?",
    opts: ["They cannot be used when the specification is incomplete","Coverage is difficult to measure, and the results depend strongly on the experience of the tester","They require the source code of the test object to be available","They can only be applied during acceptance testing"],
    ans: [1],
    just: "Because the tests come from the tester's judgement rather than from a formal model, two testers may produce very different sets of tests and the coverage achieved is hard to quantify. Their strength is precisely that they work with little documentation, at any test level, without access to the code."
  },
  {
    ch: 1,
    lo: "FL-1.4.2 (K1)",
    stem: "Which of the following influence how the test process is carried out in a given context?",
    romans: ["The software development lifecycle in use","The identified product risks","The number of testers who hold a certification","Contractual and regulatory requirements","The colour scheme of the user interface"],
    opts: ["i, iii and iv","ii, iii and v","i, ii and iv","i, ii, iii, iv and v"],
    ans: [2],
    just: "The test process must be tailored to the context: the lifecycle in use determines when testing happens, the identified risks determine its depth and focus, and contractual, legal or regulatory requirements can mandate specific techniques and documentation. The number of certified testers and the appearance of the user interface do not shape the process itself."
  },
  {
    ch: 5,
    lo: "FL-5.4.1 (K2)",
    stem: "During test execution a test fails, but the developer cannot reproduce the failure. Which configuration management practice would have prevented this situation?",
    opts: ["Recording the exact version of the test object and of the testware used in the test run","Automating the failing test case","Raising the severity of the defect report","Adding the failing test case to the regression suite"],
    ans: [0],
    just: "Configuration management identifies and versions the test object and all testware, so that any test result can be traced back to the exact items that produced it. Without that information a failure may be reproduced against a different build and appear not to exist."
  },
  {
    ch: 4,
    lo: "FL-4.5.1 (K2)",
    stem: "Which of the following BEST describes a good user story?",
    opts: ["It contains the detailed technical design of the feature to be built","It is independent, negotiable, valuable, estimable, small and testable","It is written by the tester and approved by the developer","It makes separate acceptance criteria unnecessary"],
    ans: [1],
    just: "These six characteristics are the widely used criteria for a well-formed user story. A story is a placeholder for a conversation rather than a design document, it is written collaboratively by business, development and testing, and it still needs acceptance criteria."
  },
  {
    ch: 1,
    lo: "FL-1.5.1 (K2)",
    stem: "Which of the following is MOST likely an example of a tester applying a generic skill rather than domain knowledge?",
    opts: ["Knowing that an insurance premium must be recalculated when the policy holder moves house","Understanding the tax rules that apply to invoices issued in another country","Knowing which regulatory standard applies to software used in medical devices","Explaining a defect report to a developer clearly and constructively, so that it is understood without provoking a defensive reaction"],
    ans: [3],
    just: "Communicating findings clearly, diplomatically and constructively is one of the generic skills every tester needs, independently of the application area. The other options all describe knowledge of a particular business domain."
  },
  {
    ch: 5,
    lo: "FL-5.5.1 (K3)",
    stem: "Which of the following BEST describes the main purpose of a defect report?",
    opts: ["To document the effort that the tester spent on the test run","To record which requirements have been covered by testing","To give the people who will handle the defect enough information to reproduce, prioritize and correct it","To provide evidence that the exit criteria of the test level have been met"],
    ans: [2],
    just: "A defect report exists so that the anomaly can be understood, reproduced, assessed and fixed, and so that its status can be tracked. Effort, coverage and exit criteria are reported through other means."
  },
  {
    ch: 4,
    lo: "FL-4.5.3 (K3)",
    stem: "Consider the following user story and its acceptance criteria:",
    extra: "<p style=\"font-style:italic;padding-left:1.2rem\">As a guest<br>I want to cancel my booking online<br>so that I do not have to telephone the hotel</p><ul><li>A booking can be cancelled free of charge up to 24 hours before check-in</li><li>Cancelling within 24 hours of check-in incurs a fee of one night</li><li>After a cancellation the guest receives a confirmation email</li><li>A booking that has already started cannot be cancelled</li></ul>",
    stem2: "Which of the following is the BEST example of an ATDD test for this user story?",
    opts: ["Test that the booking record is removed from the database table after cancellation","Test that cancelling a booking 12 hours before check-in charges a fee of one night","Test that the guest can change the room type of an existing booking","Test that a booking can still be cancelled after the guest has checked in"],
    ans: [1],
    just: "An acceptance test-driven development test comes directly from an acceptance criterion. Cancelling 12 hours before check-in falls inside the 24-hour window, so the one-night fee applies. Removing the record is an implementation detail, changing the room type belongs to another story, and cancelling a booking that has already started contradicts the last criterion."
  }
   ]
  }
  ]
};
