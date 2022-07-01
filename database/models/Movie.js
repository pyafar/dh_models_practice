module.exports =  (sequelize, DataTypes) => {

    const Movie = sequelize.define('Movie', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        awards : {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            defaultValue: 0
        },
        created_at : {
            type: DataTypes.DATE,
            allowNull: true
        },
        updated_at : {
            type: DataTypes.DATE,
            allowNull: true
        },
        length:{
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: true
        },
        title : {
            type: DataTypes.STRING(500),
            allowNull: false
        },
        release_date : {
            type: DataTypes.DATE,
            allowNull: false
        },
        rating : {
            type: DataTypes.DECIMAL(3,1).UNSIGNED,
            allowNull: false,
        },
        genre_id : {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: true
        }

    },
    
    { 
        timestamps: true,
        underscored: true,
     });

    Movie.associate = (models) => {

        Movie.belongsTo(models.Genre, {
            as: "genres",
            foreignKey: "genre_id"
        }),

        Movie.belongsToMany(models.Actor, {
            as : "actors",
            through: "actor_movie",
            foreignKey: "movie_id",
            otherKey: "actor_id",
            timestamps: true
        })

    }


    return Movie;

}