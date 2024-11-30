document.getElementById('custom-issue-input-form').addEventListener('submit', saveCustomIssue);

function fetchCustomIssues() {
  var customIssues = JSON.parse(localStorage.getItem('customIssues'));
  var customIssuesList = document.getElementById('custom-issues-list');

  customIssuesList.innerHTML = '';

  for (var i = 0; i < customIssues.length; i++) {
    var id = customIssues[i].id;
    var desc = customIssues[i].description;
    var severity = customIssues[i].severity;
    var assignedTo = customIssues[i].assignedTo;
    var status = customIssues[i].status;

    var textColor = status === 'Pending' ? 'red' : 'green';

    customIssuesList.innerHTML += '<div class="well">' +
      '<div class="custom-labid"> <p><span class="label label-info" style="color: ' + textColor + ';">' + status + '</span></p>' +
      '<h6>Task ID: ' + id + '</h6> </div>' +
      '<h3>' + desc + '</h3>' +
      '<p><span class="glyphicon glyphicon-folder-open"></span> ' + severity + ' ' +
      '<span class="glyphicon glyphicon-user"></span> ' + assignedTo + '</p>' +
      '<a href="#" id="custom-close-btn" class="btn btn-success"  onclick="setCustomStatusClosed(\'' + id + '\')"><i class="far fa-check-circle"></i>&nbsp;Mark as Completed</a> ' +
      '<a href="#" id="custom-del-btn" class="btn btn-danger" onclick="deleteCustomIssue(\'' + id + '\')"><i class="glyphicon glyphicon-trash"></i> Delete</a>' +
      '</div>';
  }
}


function saveCustomIssue(e) {
  var issueId = chance.guid();
  var issueDesc = document.getElementById('custom-issue-desc-input').value;
  var issueSeverity = document.getElementById('custom-issue-severity-input').value;
  var issueAssignedTo = document.getElementById('custom-issue-assigned-to-input').value;
  var issueStatus = 'Pending';
  var issue = {
    id: issueId,
    description: issueDesc,
    severity: issueSeverity,
    assignedTo: issueAssignedTo,
    status: issueStatus
  }

  if (localStorage.getItem('customIssues') === null) {
    var customIssues = [];
    customIssues.push(issue);
    localStorage.setItem('customIssues', JSON.stringify(customIssues));
  } else {
    var customIssues = JSON.parse(localStorage.getItem('customIssues'));
    customIssues.push(issue);
    localStorage.setItem('customIssues', JSON.stringify(customIssues));
  }

  document.getElementById('custom-issue-input-form').reset();
  fetchCustomIssues();
  e.preventDefault();
}

// close status
function setCustomStatusClosed(id) {
  var customIssues = JSON.parse(localStorage.getItem('customIssues'));

  for (var i = 0; i < customIssues.length; i++) {
    if (customIssues[i].id == id) {
      customIssues[i].status = "Task Completed";
    }
  }

  localStorage.setItem('customIssues', JSON.stringify(customIssues));
  fetchCustomIssues();
}

// delete issue
function deleteCustomIssue(id) {
  var customIssues = JSON.parse(localStorage.getItem('customIssues'));

  for (var i = 0; i < customIssues.length; i++) {
    if (customIssues[i].id == id) {
      customIssues.splice(i, 1);
    }
  }
  localStorage.setItem('customIssues', JSON.stringify(customIssues));
  fetchCustomIssues();
}
