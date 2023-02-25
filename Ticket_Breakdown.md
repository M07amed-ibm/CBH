# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

first ticket:
DB task: create new DB table for storing the new Agent id provided by the facility, the new table will contain 3 columns:
FacilityId (foreign key)
AgentId(foreign key)
AgentFaciltityId //the new agent key by each facility
the primary key will be a composite key from FacilityId, AgentId, so that there will be no redundent values.
Estimation: 2 hrs
acceptance crieteria: make sure the table has 1 entry for each facility-agent.

second ticket:
make a function that get the sum of the hours for each agent on a specific facility.
-the function will take 4 inputs: facilityId, AgentId, quarter, year
-the implementation will be by select the number of hours of shifts table where the facilityId= facilityId and AgentId= AgentId group by agnet id and the shift time resides in that quarter.
-Estimation: 4-5 hours
-acceptance criteria: make sure verifying that each Agent has worked these number of hours for that facility only.

third ticket:
make a function that generate the report of hours for each agent
-join the new table that we made in the first task with the data generated in the second task on the agentId = facility-agentId to generate the table.

estimation : 3hours