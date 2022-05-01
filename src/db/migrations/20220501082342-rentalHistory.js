module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('RentalHistories', {
      rentalCode: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        unique: true,
        comment: '도서 대출 코드',
      },
      bookId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Book',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        comment: '도서 id',
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'User',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        comment: '유저 id',
      },
      rentalDate: {
        type: Sequelize.DATE,
        allowNull: false,
        comment: '도서 대출일',
      },
      returnDate: {
        type: Sequelize.DATE,
        allowNull: false,
        comment: '도서 반납일',
      },
      extension: {
        type: Sequelize.INTEGER,
        allowNull: false,
        comment: '도서 반납 연장 횟수',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('RentalHistories');
  },
};
