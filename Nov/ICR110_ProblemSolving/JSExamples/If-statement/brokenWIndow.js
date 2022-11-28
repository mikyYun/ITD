/** how to fix windows in bedroom
 * //CHECK//
 * if (windows == broken)
 *   true
 *     VARIABLE fixed = false
 *     VARIABLE window
 *     VARIABLE budget = myBudget
 * 
 *       measure size and check type of glasses
 *       window.type = checkedType
 *       window.height = measuredHeight
 *       window.thickness = measuredThickness
 *       remove broken glasses and clear area
 *       
 *       VARIABLE foundGlass = false;
 * 
 *       //Buy//
 *       Find stores have stocks near me
 *       VARIABLE stores = group of stores have the window in stock
 *       
 *       //UNTIL GET WINDOW//
 *       ** DOESN NEED THIS WHILE I THINK **
 *       while (foundGlass === false) 
 *         
 *         ** USE WHILE **
 *         VARIABLE foundStore = false
 *         while (foundStore === false)
 *         
 *         ** USE FOR LOOP **  
 *         for (let store = 0; store <= stores; store ++)
 *           if (price <= budget)
 *             call store to reserve for the window
 *             go to the store and buy
 *             foundGlass = true;
 *             break;
 *         //FOR LOOP END//
 * 
 *       ** DOESN NEED WHILE I THINK **
 *      // WHILE END // 
 * 
 *       if (foundGlass)
 *         bring bought window to home
 *         VARIABLE isRightSize ?                  
 *         check the window is the right one
 *         if (isRightSize) 
 *           VARIABLE canChangeByMyself ?
 *           if (canChangeByMyself)
 *             fix it
 *           else 
 *             call worker to fix it
 *         fixed = true;
 * 
 * 
 *       //FAILED TO FIND IN STORES//
 *       if (!foundGlass) 
 *         call worker to fix it
 *         if (worker fixed window)
 *           fixed = true;
 */
