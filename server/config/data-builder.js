module.exports = (db) => {
    db.User.create({ userId: 'bk', password: '45325', name: 'Balwinder Katoch' });
    db.User.create({ userId: 'ak', password: '45325', name: 'Aryan Katoch' });
    db.Role.create({ name: 'Administrator', isAdmin : true, isActive: true });
    db.Role.create({ name: 'Super User', isAdmin : false, isActive: true });
};