module.exports =  (sequelize, DataTypes) => {

    const Genre = sequelize.define('Genre', {
        active : {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: 1
        },
        id : {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        created_at : {
            type: DataTypes.DATE,
            allowNull: true,
            field : 'created_at'
        },
        name : {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        ranking : {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        updated_at : {
            type: DataTypes.DATE,
            field : 'updated_at',
            allowNull: true,
        }
    },

    { 
        timestamps: true,
        underscored: true,
    });

    Genre.associate = (models) => {

        Genre.hasMany(models.Movie, {
            as: "Movie",
            foreignKey: "genre_id"
        })
    }

    return Genre;
}