import React from "react";
import { connect } from "react-redux";
import { fetchAPIdata } from "./action";
import { deleteUser } from "./action";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { Link } from "react-router-dom";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Tooltip from "@material-ui/core/Tooltip";
import { withStyles } from "@material-ui/styles";

const styles = {
  UserDetailsTable: {
    width: "100%",
    textAlign: "center",
  },

  UserDetailsTableHead: {
    backgroundColor: "black",

    "& th": {
      color: "white",
      fontWeight: "bold",
    },
  },

  UserDetailsTable_empty: {
    align: "center",
  },

  UserDetailsRows: {
    padding: "10px",

    "&:hover": {
      background: "#efefef",
      cursor: "pointer",
    },
  },
};

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.props.fetchAPIdata();
  }

  // componentDidMount = () => {
  //   this.props.fetchAPIdata();
  // };

  deleteUser = (id) => {
    this.props.deleteUser(id);
    // window.location.reload();
  };

  render() {
    const { classes, apiData } = this.props;

    return (
      <div>
        <Table className={classes.UserDetailsTable}>
          <TableHead className={classes.UserDetailsTableHead}>
            <TableRow>
              <TableCell>User ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Username</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Contact Number</TableCell>
              <TableCell>Website</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.apiData &&
              apiData.map((data) => (
                <TableRow key={data.id} className={classes.UserDetailsRows}>
                  <TableCell>{data.id}</TableCell>
                  <TableCell>{data.name}</TableCell>
                  <TableCell>{data.username}</TableCell>
                  <TableCell>{data.email}</TableCell>
                  <TableCell>{data.phone}</TableCell>
                  <TableCell>{data.website}</TableCell>
                  <TableCell>
                    <Tooltip title="Edit">
                      <Link aria-label="edit" to={`/editUser/${data.id}`}>
                        <EditIcon color="primary" />
                      </Link>
                    </Tooltip>

                    <Tooltip title="Delete">
                      <Link
                        aria-label="delete"
                        to={`#`}
                        onClick={() => this.deleteUser(data.id)}
                      >
                        <DeleteIcon color="secondary" />
                      </Link>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  apiData: state.data,
});
const mapDispatchToProps = (dispatch) => ({
  fetchAPIdata: () => dispatch(fetchAPIdata()),
  deleteUser: (id) => dispatch(deleteUser(id)),
});
export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(Home)
);
