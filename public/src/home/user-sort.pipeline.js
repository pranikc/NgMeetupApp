/**
 * Created by pranikchainani on 3/3/17.
 */
(function (app)
{
    app.UserSortPipe = ng.core
        .Pipe(
            {name: 'sortPipe'}
            )
        .Class({
        constructor: function () {

        },

        transform: function (list)
        {
            //if hobby is same, sort by name
            var compareTwoUsers = function (person1, person2) {
                if (person1.hobby.localeCompare( person2. hobby) === 0)
                {
                    return person1.name.localeCompare( person2.name );
                }
                return person1.hobby.localeCompare( person2.hobby ); //used in sorting to deterime if it comes before or after//if string is before, -1, 0 if same, and 1 if after
            };

            return list.slice().sort(compareTwoUsers);
        }
    });
}) (window.app || (window.app=={}));