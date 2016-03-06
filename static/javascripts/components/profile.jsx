var ProfilePage = React.createClass({
  getInitialState: function(){
    var departments = '';
    var courses = '';
    var courses_taught = '';
    var user_status = '';
    var num_departments = user_data[0].departments.length;
    if ((num_departments == 0) || (user_data[0].departments == [''])) {
      departments = 'Not enrolled into any departments';
    } else {
      for (var i = 0; i < num_departments; i++) {
        departments += user_data[0].departments[i];
        if (i < num_departments - 1) {
          departments += "\n";
        }
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
            courses += "\n";
          }
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
        }
      }
    }
    return {
      username: user_data[0].username,
      user_affiliation: user_data[0].primary_affiliation,
      email: user_data[0].email,
      user_gender: user_data[0].gender,
      user_ethnicity: user_data[0].ethnicity,
      user_native_language: user_data[0].native_language,
      user_status: user_data[0].status,
      departments: departments,
      courses: courses,
      courses_taught: courses_taught,
      affiliation: extra_data[0].primary_affiliation,
      gender: extra_data[0].gender,
      ethnicity: extra_data[0].ethnicity,
      native_language: extra_data[0].native_language,
      status: extra_data[0].status,

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
  render: function(){
    var style = {
      listStyleType: "none",
      fontSize: "20px"
    };
    return(
      <ul style={style}>
      Username: <input value={this.state.username} onChange={this.handleChange('username')} /><br/>
      Affiliation(s): <select>
                        <option value={this.state.user_affiliation}>{this.state.user_affiliation}</option>
                        <option value={this.state.affiliation}>{this.state.affiliation}</option>
                      </select><br/>
      Email: <input value={this.state.email} onChange={this.handleChange('email')} /><br/>
      Birth Date: <input type="text" value={user_data[0].dob}/><br/>
      Gender: <select>
                <option value={this.state.user_gender}>{this.state.user_gender}</option>
                <option value={this.state.gender}>{this.state.gender}</option>
              </select><br/>
      Ethnicity: <select>
                   <option value={this.state.user_ethnicity}>{this.state.user_ethnicity}</option>
                   <option value={this.state.ethnicity}>{this.state.ethnicity}</option>
                 </select><br/>
      Native Language: <select>
                         <option value={this.state.user_native_language}>{this.state.user_native_language}</option>
                         <option value={this.state.native_language}>{this.state.native_language}</option>
                       </select><br/>
      Academic Year: <select>
                       <option value={this.state.user_status}>{this.state.user_status}</option>
                       <option value={this.state.status}>{this.state.status}</option>
                     </select><br/>
      Course(s) Enrolled: <textarea name="courses" cols="30" rows="5" value={this.state.courses} /><br/>
      Department(s): <textarea name="courses" cols="30" rows="5" value={this.state.departments} /><br/>
      <br/>
      <button onClick={this._onClick} value="Change Message">{this.state.message}</button>
      </ul>
      );
    }
});
