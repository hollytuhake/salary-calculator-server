console.log('sourced');
$(document).ready(readyNow);

function readyNow() {
    console.log('ready');
    $("#submit").on('click', storeEmployee);
    $('table').on('click', '.remove', removeRow);
}

var totalCost = 0;

function storeEmployee() {
    var employeeInfo = new Employee($('#firstName').val(), $('#lastName').val(), $('#idNumber').val(), $('#jobTitle').val(), $('#annualSalary').val());
    $("table tbody").append("<tr><td>" + employeeInfo.first + '</td><td>' + employeeInfo.last + '</td><td>' + employeeInfo.id + '</td><td>' + employeeInfo.title + '</td><td>' + employeeInfo.salary + "</td><td><button class='remove'>Remove</button></td></tr>");
    totalCost = totalCost + Math.round((parseInt(employeeInfo.salary)) / 12);
    $("#totalCost").text(totalCost);
    $("input").val("");
    console.log(employeeInfo);
}

function removeRow() {
    var rowRemoved = $(this).closest('tr');
    console.log(rowRemoved);
    var sal = Math.round((rowRemoved.children(':nth-child(5)').text()) / 12);
    console.log(sal);
    totalCost = totalCost - sal;
    $('#totalCost').text(totalCost);
    $(this).closest('tr').remove();
    console.log('removed');
}

function Employee(first, last, id, title, salary) {
    console.log('clicked submit');
    this.first = first;
    this.last = last;
    this.id = id;
    this.title = title;
    this.salary = salary;
}
