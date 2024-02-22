describe('template spec', () => {
    it('employee list ', () => {
        cy.request({
            method: "GET",
            url: 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees?limit=50&offset=0&model=detailed&includeEmployees=onlyCurrent&sortField=employee.firstName&sortOrder=ASC',
            headers: {
                'Cookie': 'orangehrm=0878113687ebce6422ff9e6abe781200',
                'Host': 'opensource-demo.orangehrmlive.com',
                'Referer': 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList'
            }

        }).then((response) => {
            cy.log('Response Body:', response.body)
            cy.log('Response Status:', response.status)
            cy.log('Response Header:', response.headers)

            cy.log(response)

            expect(response.status).to.eq(200)
            // expect(response.body.data[1].empNumber).to.equal(104)

            cy.writeFile("cypress/fixtures/WriteFile/response.txt", response)
            cy.writeFile("cypress/fixtures/WriteFile/response.json", response)

        })


    })

    it('Add Emp API', () => {
        cy.request({
            method: 'POST',
            url: '/web/index.php/api/v2/pim/employees',
            headers: {
                Cookie: Cypress.env('cookivalue'),
                'Host': 'opensource-demo.orangehrmlive.com',
                'Referer': '/web/index.php/pim/addEmployee'
            },
            body: { "firstName": "Raghu", "middleName": "", "lastName": "BS", "empPicture": null, "employeeId": "1746829" }
        }).then((response) => {

            cy.log('Response Body:', response.body)
            cy.log('Response Status:', response.status)
            cy.log('Response Header:', response.headers)

            expect(response.status).to.equal(200)

            cy.writeFile('cypress/fixtures/writefile/emploeelist.json', response)
        })
    })
    it.only('Cypress Test Case - Understanding POST Method', function () {



        const payload = {
            "name": "Raghu",
            "job": "QA"
        }

        cy.request('POST', 'https://reqres.in/api/users', payload).then((response) => {

            expect(response.status).equal(201);
            expect(response.body).to.have.property("name", "Raghu")

            expect(response.body).to.have.property("job", "QA")

            var time = JSON.stringify(response.body.createdAt)
            var id = JSON.stringify(response.body.id)

            cy.log(time)
            cy.log(id)

            cy.writeFile('cypress/fixtures/writefile/test1.json', { "Id": id });
            cy.writeFile('cypress/fixtures/writefile/test2.json',response)

        })
        
    })

})

