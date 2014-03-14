/*======================================================================
   Project:  The Cup-O MUD Client
   File:     mudclient/Applet.java
   Author:   Alex Stewart
   Date:     Aug 25, 1996
   Version:  1.1
   Copyright 1996 Alex Stewart, all rights reserved
   This file is licensed under the terms of the GNU Public License.
   See the accompanying COPYING file for details.
 =======================================================================
 This is the remote mudclient.Applet class.  This class does nothing
 except raise an exception when it's loaded.  This informs the  main
 CupOmud class that there's no locally-installed mudclient.Applet class,
 and it should use its own methods instead.
*/

package mudclient;

public class Applet extends java.applet.Applet {

// =============================== Constructor ===============================

   public Applet(java.applet.Applet a) throws Exception {
      throw new Exception();
   }

// ============================ That's All Folks! ============================
}
