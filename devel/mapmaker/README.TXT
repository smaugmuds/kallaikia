Welcome to Redcap's Mapmaker Program!

This program will turn an ascii drawn map into a diku.wld script file.

<Example files are contained as <zone_name = dungeon> files>

All you need to make are two files:

<zone_name>.des
<zone_name>.map


Structure:

<zone_name>.des
---------------

This file is a plain text file that contains data in the form of

<ascii_letter>
<room_title>
<ascii_letter>
<room_title>
.
.
<ascii_letter>
<room_title>
~
~
~

The trailing ~ are to end the file.  Here is an example of the above.

W
The Watery Sewer


<zone_name>.map
---------------
Using the ascii letters you defined, you draw your own map anywhere and
anyhow you want to in a text file.  Each square in the text file stands
for one room, and each room adjacent to one another is connected to each
other.  There are no one-way exits.  You have to do them yourself.
End the file with a "~" on the far left corner on a line all by itself.

           WWW
           W W
           WWW

~

Have fun.


AlfaDikuMUD Handbook
http://www.lookup.com/Homepages/49689/book/alfa-dikumud.html
