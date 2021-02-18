const UserList = ({ Card, Icon, Users, Filter }) => {
  const users = Users.filter(
    user => user.Name.toLowerCase().indexOf(Filter.toLowerCase()) > -1
  );
  return users.length === 0 ? (
    <div className="col-12">
      <div className="alert alert-danger text-center">sorry no users found</div>
    </div>
  ) : (
    users.map((user, key) => (
      <div className="col-4 mb-3" key={key}>
        <Card
          Image={"https://i.imgur.com/DKUR9Tkl.jpg"}
          ImgAlign
          Header={user.Name}
          Title={
            user.whatsApp ? (
              <Icon Network="Phone" Profile={user.whatsApp} />
            ) : null
          }
        >
          {Object.keys(user.Social).map(
            nw =>
              user.Social[nw] && <Icon Network={nw} Profile={user.Social[nw]} />
          )}
        </Card>
      </div>
    ))
  );
};

export default UserList;
