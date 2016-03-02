var ProfilePage = React.createClass({
  getInitialState: function(){
    var departments = '';
    var courses = '';
    var courses_taught = '';
    var status = '';
    if (user_data[0].departments.length == 0 || user_data[0].departments == ['']) {
      console.log('default');
      departments = 'Not enrolled into any departments';
    } else {
      for(var i = 0; i < user_data[0].departments.length; i++){
        departments += user_data[0].departments[i];
        if(i < user_data[0].departments.length-1){
          console.log("new line");
          departments += "\n";
        }
        console.log("Departments state: " + departments);
      }
    }
    if (user_data[0].primary_affiliation == "Student") {
      if (user_data[0].status) {
        status = user_data[0].status;
      } else {
        status = "Did not specify academic year";
      }
      if (user_data[0].courses.length == 0 || user_data[0].courses == ['']) {
        courses = 'Not enrolled into any courses';
      } else {
        for(var i = 0; i < user_data[0].courses.length; i++){
          courses += user_data[0].courses[i];
          if(i < user_data[0].courses.length-1){
            console.log("new line");
            courses += "\n";
          }
          console.log("Courses state: " + courses);
        }
      }
    }
    else if (user_data[0].primary_affiliation[0] == "Faculty") {
      if (user_data[0].courses_taught.length == 0 || user_data[0].courses_taught == ['']) {
        courses_taught = 'Not enrolled into any departments';
      } else {
        for(var i = 0; i < user_data[0].courses_taught.length; i++){
          courses_taught += user_data[0].courses_taught[i];
          if(i < user_data[0].courses_taught.length-1){
            courses_taught += "\n";
          }
          console.log("Courses taught state: " + courses_taught);
        }
      }
    }
    return{
      departments: departments,
      courses: courses,
      courses_taught: courses_taught,
      status: status,
      username: "hello"
    };
  },
  _onClick: function() {
    var message = "hello world";
    this.setState({message});
  },
  handleChange: function(evt) {
    this.setState({
      value: evt.target.value
    });
  },
    render: function(){
    console.log(user_data)
    return(
      <div className="mdl-card mdl-shadow--2dp">
        <div className="mdl-card__title mdl-color--primary">
          <h2 className="mdl-card__title-text">User Info&nbsp;&nbsp;&nbsp;&nbsp;</h2>
        </div>
        <div className="mdl-card__supporting-text">
          Username: <input value={this.state.username} onChange={this.handleChange} /><br/>
            Affiliation(s): <input type="text" value={user_data[0].primary_affiliation} onChange={this.handleChange} /><br/>
            Email: <input type="text" value={user_data[0].email} /><br/>
            Birth Date: <input type="text" value={user_data[0].dob}/><br/>
            Gender: <option value="{user_data[0].gender}" />{ user_data[0].gender }<br/>
            Ethnicity: {user_data[0].ethnicity}<br/>
            Native Language: {user_data[0].native_language}<br/>
            Academic Year: {this.state.status}<br/>
            Course(s) Enrolled: <textarea name="courses" cols="30" rows="5" value={this.state.courses} /><br/>
            Department(s): <textarea name="courses" cols="30" rows="5" value={this.state.departments} /><br/>
            <br/>
            <button onClick={this._onClick} value="Change Message">{this.state.message}</button>
          </div>
        </div>
      );
    }
});
