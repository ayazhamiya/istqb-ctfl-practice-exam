/* Set M3 — 40 original questions, authored with the correct answer first.
   tools/build-m3.js interleaves the chapters and redistributes the answer key. */
module.exports = [

/* ---------------- Chapter 1: Fundamentals of Testing (8) ---------------- */
{ ch: 1, lo: "FL-1.1.1 (K1)",
  stem: "Which test objective is served by evaluating requirements and user stories before any code has been written?",
  opts: [
    "Preventing defects, by finding problems in the work products while they are still cheap to correct",
    "Verifying that the software has been correctly deployed to the production environment",
    "Reducing the effort needed for confirmation testing later in the project",
    "Demonstrating that the delivered system complies with the contractual acceptance criteria"
  ],
  ans: [0],
  just: "Evaluating a work product before it is implemented finds problems while nothing has yet been built on top of them, which prevents defects from ever reaching the code. Deployment checks, confirmation testing and contractual acceptance all happen much later and on a working system."
},
{ ch: 1, lo: "FL-1.1.2 (K2)",
  stem: "Which statement about testing and debugging is CORRECT?",
  opts: [
    "Dynamic testing can show that failures occur, while debugging locates and removes the defects that cause them",
    "Debugging can show that failures occur, while testing locates and removes the defects that cause them",
    "Testing and debugging are two names for the same activity, performed by different roles",
    "Debugging is a form of static testing, because the defect is found by reading the code"
  ],
  ans: [0],
  just: "Testing makes failures visible; debugging is the development activity that works back from a failure to the defect and corrects it. The two are distinct, and debugging is not static testing even though reading code forms part of it."
},
{ ch: 1, lo: "FL-1.2.1 (K2)",
  stem: "Which of the following BEST explains why testing is still necessary on a team of highly experienced developers?",
  opts: [
    "People make mistakes under time pressure and in complex systems, and testing reveals the resulting defects before users meet them",
    "Experienced developers write more code, so a larger number of defects is statistically certain",
    "Contracts for commercial software always require an independent test team",
    "Testing is the only objective way to measure the productivity of a development team"
  ],
  ans: [0],
  just: "Experience reduces mistakes but does not remove them, especially under schedule pressure, in unfamiliar domains or in systems too large to hold in one head. Testing gives the team evidence about what the software actually does. It is not a productivity measurement and no contract makes it necessary."
},
{ ch: 1, lo: "FL-1.2.2 (K1)",
  stem: "Which of the following activities belongs to quality assurance rather than to quality control?",
  opts: [
    "Improving the team's definition of done so that future user stories are specified more clearly",
    "Executing the regression suite before a release",
    "Reviewing a requirements document in order to find defects in it",
    "Reporting an anomaly observed during system testing"
  ],
  ans: [0],
  just: "Quality assurance improves the process so that fewer defects are introduced in the first place, and changing the definition of done is exactly that. Executing tests, reviewing a document and reporting anomalies are all quality control: they examine the product that has already been produced."
},
{ ch: 1, lo: "FL-1.3.1 (K2)",
  stem: "A colleague proposes testing every possible combination of values for the twelve input fields of a form, so that the team can be certain the form contains no defects.",
  stem2: "Which testing principle shows that this proposal cannot work?",
  opts: [
    "Exhaustive testing is impossible",
    "Testing is context dependent",
    "Early testing saves time and money",
    "Defects cluster together"
  ],
  ans: [0],
  just: "Except in trivial cases the number of possible input combinations is far too large to test, so the team must use risk and priorities to decide what to test instead. The other principles are true but say nothing about the feasibility of testing everything."
},
{ ch: 1, lo: "FL-1.4.1 (K2)",
  stem: "What is the MAIN outcome of the test analysis activity?",
  opts: [
    "The test conditions, derived from an analysis of the test basis",
    "The test cases and the test data needed to execute them",
    "The test execution schedule and the assembled test suites",
    "The test completion report and the lessons learned"
  ],
  ans: [0],
  just: "Test analysis asks what to test: it evaluates the test basis and derives the test conditions from it. Turning those conditions into test cases is test design, assembling suites and schedules is test implementation, and the completion report belongs to test completion."
},
{ ch: 1, lo: "FL-1.5.2 (K1)",
  stem: "Which of the following BEST describes the whole team approach?",
  opts: [
    "Anyone in the team with the necessary knowledge can take on any task, and everyone shares responsibility for quality",
    "Every member of the team attends every test execution session",
    "The test manager distributes the testing tasks across the whole team",
    "One tester is embedded in each development team but reports to a central test manager"
  ],
  ans: [0],
  just: "In the whole team approach any suitably skilled team member may work on any task, testers work alongside developers and business representatives, and quality is a shared responsibility rather than one role's job. It is about how responsibility is held, not about attendance or reporting lines."
},
{ ch: 1, lo: "FL-1.5.3 (K2)",
  stem: "A safety-critical component is tested by a team from a different organization that had no part in developing it.",
  stem2: "What is the MAIN advantage of this arrangement?",
  opts: [
    "The testers bring an independent view and are not influenced by the developers' assumptions about the component",
    "The testers need less domain knowledge in order to design effective tests",
    "Defects are fixed faster, because the testers report directly to the developers",
    "The development team is no longer responsible for the quality of the component"
  ],
  ans: [0],
  just: "The value of a high degree of independence is objectivity: an outside team does not share the blind spots created by having written or specified the component. Independence does not reduce the domain knowledge required, does not speed up fixes, and never transfers responsibility for quality away from the developers."
},

/* ---------------- Chapter 2: Testing Throughout the SDLC (5) ---------------- */
{ ch: 2, lo: "FL-2.1.1 (K2)",
  stem: "Your organization has moved from a sequential development model to two-week iterations.",
  stem2: "Which change to the testing should you expect?",
  opts: [
    "Testing becomes a continuous activity inside every iteration rather than a phase at the end of the project",
    "The test levels can no longer be distinguished from one another",
    "Static testing is replaced by automated regression testing",
    "Acceptance testing is performed only once, after the final iteration"
  ],
  ans: [0],
  just: "In an iterative lifecycle each iteration produces something potentially releasable, so testing has to happen within the iteration rather than after all development is finished. Test levels still exist, static testing remains valuable, and acceptance testing can happen for every increment."
},
{ ch: 2, lo: "FL-2.1.3 (K1)",
  stem: "Which of the following BEST describes test-driven development (TDD)?",
  opts: [
    "A test is written first, then just enough code to make it pass, and the code is then refactored",
    "An independent test team writes the tests before the developers begin coding",
    "The acceptance criteria are turned into automated tests once the feature is complete",
    "The tests are derived from the code as soon as it compiles successfully"
  ],
  ans: [0],
  just: "TDD works in short cycles of writing a failing test, writing the minimum code that passes it, and then improving the design while the tests keep passing. The tests are written by the developer, before the code, and they drive its design."
},
{ ch: 2, lo: "FL-2.2.1 (K2)",
  stem: "A supplier delivers a new payroll system. Before the company accepts it, a group of payroll clerks uses it to run one month's payroll with real data and confirms that the results match what they expect.",
  stem2: "Which test level does this describe?",
  opts: ["Acceptance testing", "System testing", "System integration testing", "Component integration testing"],
  ans: [0],
  just: "The testing is performed by the users of the system, on the complete system, to establish confidence and readiness for use rather than to find defects. That is acceptance testing, and in this form specifically operational or user acceptance testing."
},
{ ch: 2, lo: "FL-2.2.2 (K2)",
  stem: "A small change is made to a shared date-formatting utility that is used by six modules of the system.",
  stem2: "What should determine how much regression testing is performed?",
  opts: [
    "An impact analysis of which parts of the system the change could affect",
    "The number of test cases that were executed for the previous release",
    "The size of the source file that was modified",
    "The number of testers available in the current iteration"
  ],
  ans: [0],
  just: "Impact analysis identifies what the change could touch, directly and indirectly, and the regression testing is scoped accordingly. A shared utility used by six modules has a wide blast radius even though the change itself is small, which is exactly what impact analysis makes visible."
},
{ ch: 2, lo: "FL-2.3.1 (K2)",
  stem: "Which of the following are triggers for maintenance testing?",
  romans: [
    "Migration of the system to a new cloud platform",
    "Retirement of the system, including the archiving of its data",
    "A hotfix for a defect found in production",
    "The first release of a system that has never been in production",
    "An upgrade of a third-party library used by the system"
  ],
  stem2: "",
  opts: ["i, ii, iii and v", "i, iii and v only", "i, ii and iii only", "i, ii, iii, iv and v"],
  ans: [0],
  just: "Maintenance testing is triggered by modification, migration or retirement of a system that is already in operation, so hotfixes, platform migrations, library upgrades and retirement all qualify. The first release of a system that has never been in production is development testing, not maintenance testing."
},

/* ---------------- Chapter 3: Static Testing (5) ---------------- */
{ ch: 3, lo: "FL-3.1.2 (K2)",
  stem: "Why does finding a defect during a requirements review usually cost less than finding the same defect during system testing?",
  opts: [
    "The defect has not yet been propagated into design, code and tests, so far less work has to be redone",
    "Reviews are always carried out by less expensive staff than system testing",
    "Defects in requirements are always less severe than defects in code",
    "Static testing needs no test environment, so no licence costs are incurred"
  ],
  ans: [0],
  just: "A requirements defect that survives into the design and the code has by then been built upon, tested against and documented, so correcting it means reworking all of that. Caught in the review, only the requirement itself changes. Severity and staff costs have nothing to do with it."
},
{ ch: 3, lo: "FL-3.2.2 (K2)",
  stem: "Distributing the work product to the participants and explaining the objectives of the review to them belongs to which review activity?",
  opts: ["Initiate review", "Planning", "Individual review", "Communication and analysis"],
  ans: [0],
  just: "Initiate review makes sure everyone has what they need and understands what is expected of them, including distributing the work product and any supporting material. Planning comes before it and defines scope and criteria; the actual examination happens in individual review."
},
{ ch: 3, lo: "FL-3.2.3 (K1)",
  stem: "Consider the following review roles (1-4) and responsibilities (A-D):",
  match: {
    items: ["Author", "Review leader", "Scribe", "Manager"],
    cats: [
      "Decides that reviews shall be carried out and allocates time and budget for them",
      "Runs the review meeting and mediates between the participants",
      "Creates the work product under review and corrects the defects that are found",
      "Records the anomalies found and the decisions taken during the meeting"
    ]
  },
  stem2: "How do the roles map onto the responsibilities?",
  opts: ["1C, 2B, 3D, 4A", "1C, 2D, 3B, 4A", "1A, 2B, 3D, 4C", "1D, 2B, 3C, 4A"],
  ans: [0],
  just: "The author owns and repairs the work product, the review leader runs the meeting and mediates, the scribe records anomalies and decisions, and the manager decides that reviews happen and funds them."
},
{ ch: 3, lo: "FL-3.2.4 (K2)",
  stem: "Which review type is characterized by the author leading the participants through the work product, with no formal process and with individual preparation being optional?",
  opts: ["Walkthrough", "Inspection", "Technical review", "Informal review"],
  ans: [0],
  just: "In a walkthrough the author presents the work product and guides the participants through it, which makes it useful for finding defects, evaluating alternatives and educating the audience. An inspection is the most formal type and is led by a moderator, a technical review is led by a moderator and focuses on technical decisions, and an informal review has no defined process at all."
},
{ ch: 3, lo: "FL-3.2.5 (K3)",
  stem: "You have been asked to review a user story twice: once from the point of view of a first-time customer, and once from the point of view of a support agent who will have to answer questions about it.",
  stem2: "Which review technique are you applying?",
  opts: ["Role-based reviewing", "Checklist-based reviewing", "Ad hoc reviewing", "Scenario-based reviewing"],
  ans: [0],
  just: "Role-based reviewing evaluates a work product from the perspective of individual user roles, which surfaces problems that matter to one group and are invisible to another. Checklist-based reviewing works from a list of known problems, ad hoc reviewing gives no guidance, and scenario-based reviewing walks the work product through expected usage."
},

/* ---------------- Chapter 4: Test Analysis and Design (11) ---------------- */
{ ch: 4, lo: "FL-4.1.1 (K2)",
  stem: "For which of the following is a white-box test technique the MOST appropriate choice?",
  opts: [
    "Measuring how much of a newly written algorithm the existing component tests actually exercise",
    "Deriving test cases from the acceptance criteria of a user story",
    "Checking that the system rejects the invalid input combinations described in the specification",
    "Exploring an undocumented legacy screen in order to learn how it behaves"
  ],
  ans: [0],
  just: "White-box techniques work from the structure of the code, which is what makes them able to say how much of that structure has been exercised. Acceptance criteria and specified input combinations call for black-box techniques, and exploring an undocumented screen calls for an experience-based approach."
},
{ ch: 4, lo: "FL-4.2.1 (K3)",
  stem: "An insurance quotation form has two inputs:",
  extra: '<ul><li><strong>Driver age</strong>: a whole number from 18 to 99. Values outside this range are rejected.</li><li><strong>Vehicle category</strong>: A, B or C.</li></ul><p>You want 100% equivalence partitioning coverage of both inputs, including the invalid partitions of the age field. Each test case uses at most one invalid value.</p>',
  stem2: "What is the MINIMAL number of test cases needed?",
  opts: ["5", "3", "4", "6"],
  ans: [0],
  just: "The age field has one valid partition and two invalid ones (below 18 and above 99); the vehicle category has three valid partitions. Three test cases with a valid age cover the three categories, and two further test cases are needed for the invalid age partitions, since only one invalid value may appear per test case. That gives five."
},
{ ch: 4, lo: "FL-4.2.2 (K3)",
  stem: "A booking field accepts a whole number of nights from 1 to 28. Values outside that range are rejected.",
  stem2: "Applying 2-value boundary value analysis to this valid partition, which set of test values should be used?",
  opts: ["0, 1, 28 and 29", "1 and 28", "1, 2, 27 and 28", "0, 1, 2, 27, 28 and 29"],
  ans: [0],
  just: "In 2-value boundary value analysis each boundary contributes two coverage items: the boundary value itself and its nearest neighbour in the adjacent partition. The lower boundary 1 gives 1 and 0, the upper boundary 28 gives 28 and 29."
},
{ ch: 4, lo: "FL-4.2.3 (K3)",
  stem: "An online examination booking system is described by the decision table below.",
  extra: '<div class="figure"><table class="dt"><tr><th class="rowhead">Conditions</th><th>R1</th><th>R2</th><th>R3</th><th>R4</th><th>R5</th><th>R6</th><th>R7</th><th>R8</th></tr><tr><td class="rowhead">Registered candidate</td><td>T</td><td>T</td><td>T</td><td>T</td><td>F</td><td>F</td><td>F</td><td>F</td></tr><tr><td class="rowhead">Fee paid</td><td>T</td><td>T</td><td>F</td><td>F</td><td>T</td><td>T</td><td>F</td><td>F</td></tr><tr><td class="rowhead">Seat available</td><td>T</td><td>F</td><td>T</td><td>F</td><td>T</td><td>F</td><td>T</td><td>F</td></tr><tr class="sect"><td colspan="9">Actions</td></tr><tr><td class="rowhead">Booking confirmed</td><td>X</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td class="rowhead">Placed on waiting list</td><td></td><td>X</td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td class="rowhead">Booking rejected</td><td></td><td></td><td>X</td><td>X</td><td>X</td><td>X</td><td>X</td><td>X</td></tr></table></div>',
  stem2: "Which test case covers rule R2?",
  opts: [
    "A registered candidate who has paid the fee, at a time when no seat is available",
    "A registered candidate who has not paid the fee, at a time when a seat is available",
    "A candidate who is not registered but has paid the fee, at a time when a seat is available",
    "A registered candidate who has paid the fee, at a time when a seat is available"
  ],
  ans: [0],
  just: "R2 is the column with the condition values true, true, false: a registered candidate who has paid but for whom no seat is free, and the resulting action is that the candidate is placed on the waiting list. The remaining options describe R3, R5 and R1."
},
{ ch: 4, lo: "FL-4.2.4 (K3)",
  stem: "The lifecycle of a purchase order is modelled by the state transition diagram below. The initial state is DRAFT; SHIPPED and CANCELLED are final states.",
  fig: "order-states",
  stem2: "Which of the following sequences of events is NOT possible?",
  opts: [
    "submit, approve, reject",
    "submit, reject, submit, approve, cancel",
    "submit, approve, ship",
    "cancel"
  ],
  ans: [0],
  just: "The event reject is only accepted in the state SUBMITTED. After submit and approve the order is in the state APPROVED, where the accepted events are ship and cancel, so reject cannot follow. Every other sequence follows transitions that the diagram allows."
},
{ ch: 4, lo: "FL-4.3.1 (K2)",
  stem: "Consider the following pseudocode:",
  code: '1   READ n\n2   total = 0\n3   i = 1\n4   WHILE i &lt;= n DO\n5       total = total + i\n6       i = i + 1\n7   END WHILE\n8   IF total &gt; 10 THEN\n9       PRINT "big"\n10  END IF\n11  PRINT total',
  stem2: "What is the MINIMAL number of test cases needed to achieve 100% statement coverage?",
  opts: ["1", "2", "3", "4"],
  ans: [0],
  just: "A single test case with n = 5 enters the loop, so the statements inside it are executed, and produces a total of 15, so the statement inside the second decision is executed as well. Every executable statement is therefore covered by that one test case."
},
{ ch: 4, lo: "FL-4.3.2 (K2)",
  stem: "Consider the following pseudocode:",
  code: '1   READ age\n2   READ isMember\n3   IF age &lt; 18 THEN\n4       price = 5\n5   ELSE\n6       price = 10\n7   END IF\n8   IF isMember = TRUE THEN\n9       price = price - 2\n10  END IF\n11  PRINT price',
  stem2: "What is the MINIMAL number of test cases needed to achieve 100% branch coverage?",
  opts: ["2", "1", "3", "4"],
  ans: [0],
  just: "There are four branches, two from each decision. One test case with age = 10 and isMember true takes the true branch of both decisions, and a second with age = 30 and isMember false takes both false branches. Two test cases therefore cover all four."
},
{ ch: 4, lo: "FL-4.3.3 (K2)",
  stem: "Why are white-box techniques especially valuable at component testing level?",
  opts: [
    "The code is available and small enough for coverage to be measured and the gaps closed cheaply",
    "They remove the need for specification-based tests at that level",
    "They are the only way to detect performance problems inside a component",
    "They guarantee that the component's interfaces have been correctly integrated"
  ],
  ans: [0],
  just: "At component level the developer has the code in front of them and the unit is small, so measuring coverage is practical and any uncovered branch can be addressed immediately. White-box techniques complement specification-based tests rather than replacing them, and they say nothing about integration or performance."
},
{ ch: 4, lo: "FL-4.4.2 (K2)",
  stem: "In which of the following situations is exploratory testing MOST useful?",
  opts: [
    "The specification is sparse, time is short, and the team needs early feedback on a new feature",
    "A regulated project requires full traceability from every test to a numbered requirement",
    "The same tests have to be repeated identically in every nightly build",
    "The team needs to demonstrate that 100% branch coverage has been reached"
  ],
  ans: [0],
  just: "Exploratory testing is at its strongest where documentation is thin and feedback is needed quickly, because the tester learns and tests at the same time. Full traceability, identical repetition and coverage evidence all call for scripted or automated approaches."
},
{ ch: 4, lo: "FL-4.4.3 (K2)",
  stem: "What is a known limitation of checklist-based testing?",
  opts: [
    "Checklists become stale over time, and testers may stop looking beyond the items on the list",
    "It cannot be applied without access to the source code of the test object",
    "It requires a complete and fully documented specification",
    "It cannot be combined with any other test technique"
  ],
  ans: [0],
  just: "A checklist captures what was worth checking when it was written, and both the product and the risks move on; it can also narrow a tester's attention to the listed items. Checklists need neither code nor a full specification, and they combine well with other techniques."
},
{ ch: 4, lo: "FL-4.5.2 (K2)",
  stem: "Which of the following is an acceptance criterion written in the given/when/then format?",
  opts: [
    "Given a logged-in customer with an empty basket, when they add an item, then the basket shows one item",
    "The basket must be fast and easy to use",
    "As a customer I want a basket so that I can buy several items in one order",
    "The basket module shall be implemented using the existing cache service"
  ],
  ans: [0],
  just: "The given/when/then format states the precondition, the action and the expected outcome, which makes the criterion directly testable. Requiring the basket to be fast and easy to use is not measurable, the user story states a need rather than a condition, and prescribing the existing cache service is an implementation constraint."
},

/* ---------------- Chapter 5: Managing the Test Activities (9) ---------------- */
{ ch: 5, lo: "FL-5.1.1 (K2)",
  stem: "Which of the following is a good reason for updating the test plan during a project?",
  opts: [
    "The product risk analysis has changed after new information about the system came to light",
    "A test case has failed and a defect has been reported",
    "A tester has finished executing the test procedures assigned to them",
    "The team has agreed on a new naming convention for automated test scripts"
  ],
  ans: [0],
  just: "A test plan is not written once and frozen: when the risks change, the scope, priorities and effort in the plan have to change with them. Individual failures, completed work and naming conventions are handled inside the existing plan."
},
{ ch: 5, lo: "FL-5.1.3 (K2)", multi: true,
  stem: "Which TWO of the following are entry criteria for a test level?",
  opts: [
    "The test environment has been set up and verified",
    "The required test data is available and has been loaded",
    "The agreed level of test coverage has been reached",
    "All planned test cases have been executed",
    "No defects with high severity remain open"
  ],
  ans: [0, 1],
  just: "Entry criteria describe the preconditions for starting testing sensibly: an environment that works and the data the tests need. Achieved coverage, completed execution and an acceptable number of open defects all describe the state at which testing may stop, and are therefore exit criteria."
},
{ ch: 5, lo: "FL-5.1.4 (K3)",
  stem: "In the last three comparable projects, testing accounted on average for 25% of the total project effort. The new project has been estimated at 400 person-days in total.",
  stem2: "Using metrics-based estimation, what is the estimated test effort?",
  opts: ["100 person-days", "80 person-days", "125 person-days", "300 person-days"],
  ans: [0],
  just: "Metrics-based estimation applies data from comparable past projects to the new one: 25% of 400 person-days is 100 person-days. The figure 300 is the remaining project effort, not the test effort."
},
{ ch: 5, lo: "FL-5.1.5 (K3)",
  stem: "Four test cases have been assessed for risk. Likelihood and impact are each rated on a scale from 1 to 5, and the risk level is calculated as likelihood multiplied by impact.",
  extra: '<div class="figure"><table class="dt"><tr><th>Test case</th><th>Likelihood</th><th>Impact</th></tr><tr><td class="rowhead">TC 1</td><td>5</td><td>2</td></tr><tr><td class="rowhead">TC 2</td><td>3</td><td>4</td></tr><tr><td class="rowhead">TC 3</td><td>2</td><td>5</td></tr><tr><td class="rowhead">TC 4</td><td>4</td><td>4</td></tr></table></div>',
  stem2: "If the test cases are executed in descending order of risk level, which one is executed SECOND?",
  opts: ["TC 2", "TC 4", "TC 1", "TC 3"],
  ans: [0],
  just: "The risk levels are TC 1 = 10, TC 2 = 12, TC 3 = 10 and TC 4 = 16. TC 4 has the highest risk level and is executed first, TC 2 is next with 12, and TC 1 and TC 3 follow with 10 each."
},
{ ch: 5, lo: "FL-5.1.7 (K2)",
  stem: "In which agile testing quadrant do automated component tests and component integration tests belong?",
  opts: [
    "Quadrant Q1: technology facing, supporting the team",
    "Quadrant Q2: business facing, supporting the team",
    "Quadrant Q3: business facing, critique the product",
    "Quadrant Q4: technology facing, critique the product"
  ],
  ans: [0],
  just: "Component and component integration tests are written in technical terms and exist to give the team fast feedback while it builds, which places them in Q1. Q2 holds business-facing tests that also support the team, Q3 covers exploratory and usability testing, and Q4 covers performance and security testing."
},
{ ch: 5, lo: "FL-5.2.1 (K1)",
  stem: "Which of the following BEST describes a risk in the context of testing?",
  opts: [
    "A potential event with negative consequences, characterized by its likelihood and its impact",
    "A defect that has been found but has not yet been corrected",
    "A failure that occurred in production after the most recent release",
    "A test case that has failed in more than one test cycle"
  ],
  ans: [0],
  just: "A risk is something that has not happened yet. It is described by how likely it is and how bad it would be, and those two attributes together give its risk level. Defects, failures and failing tests are things that have already occurred."
},
{ ch: 5, lo: "FL-5.2.3 (K2)",
  stem: "Who should take part in product risk analysis?",
  opts: [
    "A range of stakeholders including business representatives, developers and testers, because identifying risks benefits from different perspectives",
    "The test manager alone, so that the assessment stays objective",
    "Only the developers, because they know best where the code is weak",
    "Only the customer, because they carry the business consequences"
  ],
  ans: [0],
  just: "Different people see different risks: business representatives know what would hurt the organization, developers know where the design is fragile, and testers know where defects have clustered before. A single perspective reliably misses whole categories of risk."
},
{ ch: 5, lo: "FL-5.3.3 (K2)",
  stem: "A test progress report is being prepared for the team's daily stand-up rather than for a formal governance board.",
  stem2: "How should it differ?",
  opts: [
    "It can be informal and spoken, concentrating on what has changed since yesterday and what is currently blocking progress",
    "It must contain exactly the same formal metrics as the governance report, so that reporting stays consistent",
    "It should be omitted, because progress reporting belongs only in formal written reports",
    "It should list every defect found so far, together with its full technical analysis"
  ],
  ans: [0],
  just: "How test status is communicated depends on the audience and the purpose. A stand-up needs the short, current picture and the obstacles; a governance board needs the formal, aggregated view. Matching the report to its audience is the point, not applying one format everywhere."
},
{ ch: 5, lo: "FL-5.5.1 (K3)", multi: true,
  stem: "Which TWO of the following belong in a well-written defect report?",
  opts: [
    "The steps needed to reproduce the anomaly",
    "The identification of the test object and of the test environment",
    "The name of the developer believed to have caused the defect",
    "The tester's estimate of how long the correction ought to take",
    "A list of all the other defects found during the same test run"
  ],
  ans: [0, 1],
  just: "A defect report exists so that someone else can reproduce, assess and correct the anomaly, which needs the reproduction steps and the exact object and environment it appeared in. Attributing blame, estimating someone else's fix and listing unrelated defects all belong elsewhere or nowhere."
},

/* ---------------- Chapter 6: Test Tools (2) ---------------- */
{ ch: 6, lo: "FL-6.1.1 (K2)",
  stem: "Which category of tool supports static testing directly?",
  opts: [
    "Static analysis tools, which examine code and other work products without executing them",
    "Test execution tools, which run automated test scripts against the software",
    "Test data preparation tools, which generate and anonymize input records",
    "Performance testing tools, which apply a defined load to the system"
  ],
  ans: [0],
  just: "Static analysis tools inspect the work product itself and report problems such as unreachable code, coding standard violations and dependency issues, without ever running it. The other three categories all require the software to be executed."
},
{ ch: 6, lo: "FL-6.2.1 (K1)",
  stem: "Which of the following is a realistic expectation when introducing test automation?",
  opts: [
    "The initial investment is significant, and the benefit appears only once the tests have been run many times",
    "The whole regression suite can be automated within the first iteration",
    "Manual testing becomes unnecessary once the automation is in place",
    "The automated tests will find the same defects a skilled exploratory tester would find"
  ],
  ans: [0],
  just: "Automation costs effort to build and to maintain, and it repays that effort through repeated execution, so the return arrives over time rather than immediately. Automating everything at once is unrealistic, manual and exploratory testing continue to find defects automation cannot, and automated tests only check what they were told to check."
}
];
