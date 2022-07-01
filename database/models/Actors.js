module.exports =  (sequelize, DataTypes) => {

    const Actor = sequelize.define('Actor', {
        id : {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        created_at : {
            type: DataTypes.DATE,
            allowNull: true,
        },
        updated_at : {
            type: DataTypes.DATE,
            allowNull: true,
        },
        favorite_movie_id : {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: true,
        },
        first_name : {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        last_name : {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        rating : {
            type: DataTypes.DECIMAL(3,1),
            allowNull: true
        }
    },

    {
        timestamps: true,
        underscored: true,
    });

    Actor.associate = (models) => {

        Actor.belongsToMany(models.Movie, {
            as : "movies",
            through: "actor_movie",
            foreignKey: "actor_id",
            otherKey: "movie_id",
            timestamps: true
        })

    }
    

 
    return Actor;
}