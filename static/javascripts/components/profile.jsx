var ProfilePage = React.createClass({
  getInitialState: function(){
    var departments = '';
    var courses = '';
    var courses_taught = '';
    var user_status = '';
    var num_departments = user_data[0].departments.length;
    if ((num_departments == 0) || (user_data[0].departments == [''])) {
      console.log('default');
      departments = 'Not enrolled into any departments';
    } else {
      for (var i = 0; i < num_departments; i++) {
        departments += user_data[0].departments[i];
        if (i < num_departments - 1) {
          console.log("new line");
          departments += "\n";
        }
        // Do we want to log this into the console every iteration in the forloop?
        console.log("Departments state: " + departments);
      }
    }
    if (user_data[0].primary_affiliation == "Student") {
      var num_courses = user_data[0].courses.length;
      if (user_data[0].status) {
        user_status = user_data[0].status;
      } else {
        user_status = "Did not specify academic year";
      }
      if ((num_courses == 0) || (user_data[0].courses == [''])) {
        courses = 'Not enrolled into any courses';
      } else {
        for (var i = 0; i < num_courses; i++) {
          courses += user_data[0].courses[i];
          if (i < num_courses - 1) {
            console.log("new line");
            courses += "\n";
          }
          console.log("Courses state: " + courses);
        }
      }
    } else if (user_data[0].primary_affiliation == "Faculty") {
      var num_courses_taught = user_data[0].courses_taught.length;
      if ((num_courses_taught == 0) || (user_data[0].courses_taught == [''])) {
        courses_taught = 'Not enrolled into any departments';
      } else {
        for (var i = 0; i < num_courses_taught; i++) {
          courses_taught += user_data[0].courses_taught[i];
          if (i < num_courses_taught - 1) {
            courses_taught += "\n";
          }
          console.log("Courses taught state: " + courses_taught);
        }
      }
    }
    return {
      departments: departments,
      courses: courses,
      courses_taught: courses_taught,
      user_status: user_status,
      username: user_data[0].username,
      email: user_data[0].email,
      gender: user_data[0].gender,
      extra_gender: extra_data[0].gender
    };
  },
  _onClick: function() {
    var message = "hello world";
    this.setState({message});
  },
  handleChange: function(key) {
    return function (e) {
      var state = {};
      state[key] = e.target.value;
      this.setState(state);
    }.bind(this);
  },
    render: function() {
      console.log(user_data)
      return(
        <div className="mdl-card mdl-shadow--2dp">
          <div className="mdl-card__title mdl-color--primary">
            <h2 className="mdl-card__title-text">User Info&nbsp;&nbsp;&nbsp;&nbsp;</h2>
          </div>
          <div className="mdl-card__supporting-text">
            Username: <input value={this.state.username} onChange={this.handleChange('username')} /><br/>
            Affiliation(s): <input type="text" value={user_data[0].primary_affiliation} onChange={this.handleChange} /><br/>
            Email: <input value={this.state.email} onChange={this.handleChange('email')} /><br/>
            Birth Date: <input type="text" value={user_data[0].dob}/><br/>
            Gender: <select>
                      <option value={this.state.gender}>{this.state.gender}</option>
                      <option value={this.state.extra_gender}>{this.state.extra_gender[0]}</option>
                    </select><br/>
            Ethnicity: {user_data[0].ethnicity}<br/>
            Native Language: {user_data[0].native_language}<br/>
            Academic Year: {this.state.user_status}<br/>
            Course(s) Enrolled: <textarea name="courses" cols="30" rows="5" value={this.state.courses} /><br/>
            Department(s): <textarea name="courses" cols="30" rows="5" value={this.state.departments} /><br/>
            <br/>
            <button onClick={this._onClick} value="Change Message">{this.state.message}</button>
          </div>
        </div>
      );
    }
});
