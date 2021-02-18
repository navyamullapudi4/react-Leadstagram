const UserList = ({ Card, Icon, user }) => {
  return user.length === 0 ? (
    <div className="col-12">
      <div className="alert alert-danger text-center">
        Sorry, no users found.
      </div>
    </div>
  ) : (
    user.map((user, key) => (
      <div className="col-12 col-md-6 col-lg-4 col-xl-3 mb-3" key={key}>
        <Card
          Image={
            user.Imgur
              ? "https://i.imgur.com/" + user.Imgur + "b.jpg"
              : "https://i.imgur.com/DKUR9Tkb.jpg"
          }
          ImgAlign="top"
          Header={user.Name}
          Title={
            user.WhatsApp ? (
              <Icon Network="Phone" Profile={user.WhatsApp} />
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
