# QA Test Execution Matrix - Sprint 1
* **QA Tester:** @gooseschool22
* **Client Deliverable:** Console Interactive Kiosk

| Test ID | Target Input Field | Test Input Description | Expected Output | Actual Behavior | Status (Pass/Fail) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| TC-01 | Full Name | Standard text (`"Jane Doe"`) | Formatted correctly in ASCII box | Formats correctly in ASCII box | Pass |
| TC-02 | Full Name | Longer Last Name (`"John Supercalifragilisticexpialidocious"`) | Formatted correctly in ASCII box | Caps the max letters to prevent overflow, however cannot print the full string | Fail (Now fixed) |
| TC-04 | Full Name | Symbol input (`"m@rio m@rio"`) | Correctly responds to symbols with no errors | Formats correctly with no errors | Pass |
| TC-05 | Department/Role | Blank input (`""`) | Handles gracefully without crash | No errors | Pass |
| TC-06 | Email / Contact | Valid string (`"test@bch.org"`) | Stored & printed accurately | Printed input accurately with no problem | Pass |
| TC-07 | Email / Contact | Integer input (`"1234"`) | Accepts integer value without conflict | Printed accurately without issue | Pass |
| TC-08 | Badge Tier | Lowercase text (`"vip"`) | Clean output on badge | Works correctly | Pass |
| TC-09 | All Text Boxes | High amount of large characters (`"@@@@@@@@@@@..."`) | Handles large amount of large symbols without error or UI wonkiness idk | Unlike TC-02, it now prints an ellipsis when reaching the limit, while storing the input | Pass |

