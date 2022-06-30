
$("#empId").focus();

function validateAndGetFormData() {
    var empIdVar = $("#empId").val();
    if (empIdVar === "") {
        alert("Employee ID Required Value");
        $("#empId").focus();
        return "";
    }
    var empNameVar = $("#empName").val();
    if (empNameVar === "") {
        alert("Employee Name is Required Value");
        $("#empName").focus();
        return "";
    }
    var empEmailVar = $("#empEmail").val();
    if (empEmailVar === "") {
        alert("Employee Email is Required Value");
        $("#empEmail").focus();
        return "";
    }
    var empPasswordvar=$('#empPassword').val();
    if(empPasswordvar ==""){
        alert("Employees password is needed");
        $('#empPassword').focus();
        return "";

    }
    var jsonStrObj = {
        empId: empIdVar,
        empName: empNameVar,
        empEmail: empEmailVar,
        empPassword:empPasswordvar
    };
    return JSON.stringify(jsonStrObj);
}
function resetForm() {
    $("#empId").val("")
    $("#empName").val("");
    $("#empEmail").val("");
    $('#empPassword').val("");
    $("#empId").focus();
}
// This method is used to create PUT Json request.
// function createPUTRequest(connToken, jsonObj, dbName, relName) {
//     var putRequest = "{\n" +
//         "\"token\" : \"" +
//         connToken +
//         "\"," +
//         "\"dbName\": \"" +
//         dbName +
//         "\",\n" + "\"cmd\" : \"PUT\",\n" +
//         "\"rel\" : \"" +
//         relName + "\"," +
//         "\"jsonStr\": \n" +
//         jsonObj +
//         "\n" +
//         "}";
//     return putRequest;
// }

// function executeCommand(reqString, dbBaseUrl, apiEndPointUrl) {
//     var url = dbBaseUrl + apiEndPointUrl;
//     var jsonObj;
//     $.post(url, reqString, function (result) {
//         jsonObj = JSON.parse(result);
//     }).fail(function (result) {
//         var dataJsonObj = result.responseText;
//         jsonObj = JSON.parse(dataJsonObj);
//     });
//     return jsonObj;
// }



function saveEmployee() {
    var jsonStr = validateAndGetFormData();
    if (jsonStr === "") {
        return;
    }
    var putReqStr = createPUTRequest("90939291|-31949287169788958|90939845",
        jsonStr, "SAMPLE", "SAMPLE-REL");
    alert(putReqStr);
    jQuery.ajaxSetup({
        async: false
    });
    var resultObj =executeCommandAtGivenBaseUrl(putReqStr,
        "http://api.login2explore.com:5577", "/api/iml");
    alert(JSON.stringify(resultObj));
    jQuery.ajaxSetup({
        async: true
    });
    resetForm();
}