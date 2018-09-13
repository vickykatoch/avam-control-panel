module.exports = (db) => {
    db.Role.create({ name: 'Administrator', isAdmin: true, isActive: true });
    db.Role.create({ name: 'Super User', isAdmin: false, isActive: true });
    db.User.create({ userId: 'bk', password: '45325', name: 'Balwinder Katoch' }).then((user)=> {
        user.setRoles(1)
    });
    db.User.create({ userId: 'ak', password: '45325', name: 'Aryan Katoch' });
};