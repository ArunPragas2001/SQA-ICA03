/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 2157.0, "minX": 0.0, "maxY": 16840.0, "series": [{"data": [[0.0, 2157.0], [0.1, 2157.0], [0.2, 2157.0], [0.3, 2157.0], [0.4, 2157.0], [0.5, 2157.0], [0.6, 2157.0], [0.7, 2157.0], [0.8, 2186.0], [0.9, 2186.0], [1.0, 2186.0], [1.1, 2186.0], [1.2, 2186.0], [1.3, 2186.0], [1.4, 2186.0], [1.5, 2186.0], [1.6, 2187.0], [1.7, 2187.0], [1.8, 2187.0], [1.9, 2187.0], [2.0, 2187.0], [2.1, 2187.0], [2.2, 2187.0], [2.3, 2199.0], [2.4, 2199.0], [2.5, 2199.0], [2.6, 2199.0], [2.7, 2199.0], [2.8, 2199.0], [2.9, 2199.0], [3.0, 2199.0], [3.1, 3782.0], [3.2, 3782.0], [3.3, 3782.0], [3.4, 3782.0], [3.5, 3782.0], [3.6, 3782.0], [3.7, 3782.0], [3.8, 3805.0], [3.9, 3805.0], [4.0, 3805.0], [4.1, 3805.0], [4.2, 3805.0], [4.3, 3805.0], [4.4, 3805.0], [4.5, 3805.0], [4.6, 3810.0], [4.7, 3810.0], [4.8, 3810.0], [4.9, 3810.0], [5.0, 3810.0], [5.1, 3810.0], [5.2, 3810.0], [5.3, 3816.0], [5.4, 3816.0], [5.5, 3816.0], [5.6, 3816.0], [5.7, 3816.0], [5.8, 3816.0], [5.9, 3816.0], [6.0, 3816.0], [6.1, 3817.0], [6.2, 3817.0], [6.3, 3817.0], [6.4, 3817.0], [6.5, 3817.0], [6.6, 3817.0], [6.7, 3817.0], [6.8, 3819.0], [6.9, 3819.0], [7.0, 3819.0], [7.1, 3819.0], [7.2, 3819.0], [7.3, 3819.0], [7.4, 3819.0], [7.5, 3819.0], [7.6, 3821.0], [7.7, 3821.0], [7.8, 3821.0], [7.9, 3821.0], [8.0, 3821.0], [8.1, 3821.0], [8.2, 3821.0], [8.3, 3824.0], [8.4, 3824.0], [8.5, 3824.0], [8.6, 3824.0], [8.7, 3824.0], [8.8, 3824.0], [8.9, 3824.0], [9.0, 3824.0], [9.1, 3824.0], [9.2, 3824.0], [9.3, 3824.0], [9.4, 3824.0], [9.5, 3824.0], [9.6, 3824.0], [9.7, 3824.0], [9.8, 3825.0], [9.9, 3825.0], [10.0, 3825.0], [10.1, 3825.0], [10.2, 3825.0], [10.3, 3825.0], [10.4, 3825.0], [10.5, 3825.0], [10.6, 3832.0], [10.7, 3832.0], [10.8, 3832.0], [10.9, 3832.0], [11.0, 3832.0], [11.1, 3832.0], [11.2, 3832.0], [11.3, 3864.0], [11.4, 3864.0], [11.5, 3864.0], [11.6, 3864.0], [11.7, 3864.0], [11.8, 3864.0], [11.9, 3864.0], [12.0, 3864.0], [12.1, 5004.0], [12.2, 5004.0], [12.3, 5004.0], [12.4, 5004.0], [12.5, 5004.0], [12.6, 5004.0], [12.7, 5004.0], [12.8, 5016.0], [12.9, 5016.0], [13.0, 5016.0], [13.1, 5016.0], [13.2, 5016.0], [13.3, 5016.0], [13.4, 5016.0], [13.5, 5016.0], [13.6, 5020.0], [13.7, 5020.0], [13.8, 5020.0], [13.9, 5020.0], [14.0, 5020.0], [14.1, 5020.0], [14.2, 5020.0], [14.3, 5023.0], [14.4, 5023.0], [14.5, 5023.0], [14.6, 5023.0], [14.7, 5023.0], [14.8, 5023.0], [14.9, 5023.0], [15.0, 5023.0], [15.1, 5026.0], [15.2, 5026.0], [15.3, 5026.0], [15.4, 5026.0], [15.5, 5026.0], [15.6, 5026.0], [15.7, 5026.0], [15.8, 5027.0], [15.9, 5027.0], [16.0, 5027.0], [16.1, 5027.0], [16.2, 5027.0], [16.3, 5027.0], [16.4, 5027.0], [16.5, 5027.0], [16.6, 5031.0], [16.7, 5031.0], [16.8, 5031.0], [16.9, 5031.0], [17.0, 5031.0], [17.1, 5031.0], [17.2, 5031.0], [17.3, 5032.0], [17.4, 5032.0], [17.5, 5032.0], [17.6, 5032.0], [17.7, 5032.0], [17.8, 5032.0], [17.9, 5032.0], [18.0, 5032.0], [18.1, 5033.0], [18.2, 5033.0], [18.3, 5033.0], [18.4, 5033.0], [18.5, 5033.0], [18.6, 5033.0], [18.7, 5033.0], [18.8, 5034.0], [18.9, 5034.0], [19.0, 5034.0], [19.1, 5034.0], [19.2, 5034.0], [19.3, 5034.0], [19.4, 5034.0], [19.5, 5034.0], [19.6, 5035.0], [19.7, 5035.0], [19.8, 5035.0], [19.9, 5035.0], [20.0, 5035.0], [20.1, 5035.0], [20.2, 5035.0], [20.3, 5035.0], [20.4, 5049.0], [20.5, 5049.0], [20.6, 5049.0], [20.7, 5049.0], [20.8, 5049.0], [20.9, 5049.0], [21.0, 5049.0], [21.1, 5258.0], [21.2, 5258.0], [21.3, 5258.0], [21.4, 5258.0], [21.5, 5258.0], [21.6, 5258.0], [21.7, 5258.0], [21.8, 5258.0], [21.9, 5264.0], [22.0, 5264.0], [22.1, 5264.0], [22.2, 5264.0], [22.3, 5264.0], [22.4, 5264.0], [22.5, 5264.0], [22.6, 5281.0], [22.7, 5281.0], [22.8, 5281.0], [22.9, 5281.0], [23.0, 5281.0], [23.1, 5281.0], [23.2, 5281.0], [23.3, 5281.0], [23.4, 5285.0], [23.5, 5285.0], [23.6, 5285.0], [23.7, 5285.0], [23.8, 5285.0], [23.9, 5285.0], [24.0, 5285.0], [24.1, 5288.0], [24.2, 5288.0], [24.3, 5288.0], [24.4, 5288.0], [24.5, 5288.0], [24.6, 5288.0], [24.7, 5288.0], [24.8, 5288.0], [24.9, 5293.0], [25.0, 5293.0], [25.1, 5293.0], [25.2, 5293.0], [25.3, 5293.0], [25.4, 5293.0], [25.5, 5293.0], [25.6, 5299.0], [25.7, 5299.0], [25.8, 5299.0], [25.9, 5299.0], [26.0, 5299.0], [26.1, 5299.0], [26.2, 5299.0], [26.3, 5299.0], [26.4, 5304.0], [26.5, 5304.0], [26.6, 5304.0], [26.7, 5304.0], [26.8, 5304.0], [26.9, 5304.0], [27.0, 5304.0], [27.1, 5315.0], [27.2, 5315.0], [27.3, 5315.0], [27.4, 5315.0], [27.5, 5315.0], [27.6, 5315.0], [27.7, 5315.0], [27.8, 5315.0], [27.9, 5589.0], [28.0, 5589.0], [28.1, 5589.0], [28.2, 5589.0], [28.3, 5589.0], [28.4, 5589.0], [28.5, 5589.0], [28.6, 5732.0], [28.7, 5732.0], [28.8, 5732.0], [28.9, 5732.0], [29.0, 5732.0], [29.1, 5732.0], [29.2, 5732.0], [29.3, 5732.0], [29.4, 5733.0], [29.5, 5733.0], [29.6, 5733.0], [29.7, 5733.0], [29.8, 5733.0], [29.9, 5733.0], [30.0, 5733.0], [30.1, 5745.0], [30.2, 5745.0], [30.3, 5745.0], [30.4, 5745.0], [30.5, 5745.0], [30.6, 5745.0], [30.7, 5745.0], [30.8, 5745.0], [30.9, 5859.0], [31.0, 5859.0], [31.1, 5859.0], [31.2, 5859.0], [31.3, 5859.0], [31.4, 5859.0], [31.5, 5859.0], [31.6, 5990.0], [31.7, 5990.0], [31.8, 5990.0], [31.9, 5990.0], [32.0, 5990.0], [32.1, 5990.0], [32.2, 5990.0], [32.3, 5990.0], [32.4, 6119.0], [32.5, 6119.0], [32.6, 6119.0], [32.7, 6119.0], [32.8, 6119.0], [32.9, 6119.0], [33.0, 6119.0], [33.1, 6237.0], [33.2, 6237.0], [33.3, 6237.0], [33.4, 6237.0], [33.5, 6237.0], [33.6, 6237.0], [33.7, 6237.0], [33.8, 6237.0], [33.9, 6356.0], [34.0, 6356.0], [34.1, 6356.0], [34.2, 6356.0], [34.3, 6356.0], [34.4, 6356.0], [34.5, 6356.0], [34.6, 6474.0], [34.7, 6474.0], [34.8, 6474.0], [34.9, 6474.0], [35.0, 6474.0], [35.1, 6474.0], [35.2, 6474.0], [35.3, 6474.0], [35.4, 6580.0], [35.5, 6580.0], [35.6, 6580.0], [35.7, 6580.0], [35.8, 6580.0], [35.9, 6580.0], [36.0, 6580.0], [36.1, 6760.0], [36.2, 6760.0], [36.3, 6760.0], [36.4, 6760.0], [36.5, 6760.0], [36.6, 6760.0], [36.7, 6760.0], [36.8, 6760.0], [36.9, 6836.0], [37.0, 6836.0], [37.1, 6836.0], [37.2, 6836.0], [37.3, 6836.0], [37.4, 6836.0], [37.5, 6836.0], [37.6, 6943.0], [37.7, 6943.0], [37.8, 6943.0], [37.9, 6943.0], [38.0, 6943.0], [38.1, 6943.0], [38.2, 6943.0], [38.3, 6943.0], [38.4, 7068.0], [38.5, 7068.0], [38.6, 7068.0], [38.7, 7068.0], [38.8, 7068.0], [38.9, 7068.0], [39.0, 7068.0], [39.1, 7190.0], [39.2, 7190.0], [39.3, 7190.0], [39.4, 7190.0], [39.5, 7190.0], [39.6, 7190.0], [39.7, 7190.0], [39.8, 7190.0], [39.9, 7303.0], [40.0, 7303.0], [40.1, 7303.0], [40.2, 7303.0], [40.3, 7303.0], [40.4, 7303.0], [40.5, 7303.0], [40.6, 7303.0], [40.7, 7419.0], [40.8, 7419.0], [40.9, 7419.0], [41.0, 7419.0], [41.1, 7419.0], [41.2, 7419.0], [41.3, 7419.0], [41.4, 7558.0], [41.5, 7558.0], [41.6, 7558.0], [41.7, 7558.0], [41.8, 7558.0], [41.9, 7558.0], [42.0, 7558.0], [42.1, 7558.0], [42.2, 7675.0], [42.3, 7675.0], [42.4, 7675.0], [42.5, 7675.0], [42.6, 7675.0], [42.7, 7675.0], [42.8, 7675.0], [42.9, 7788.0], [43.0, 7788.0], [43.1, 7788.0], [43.2, 7788.0], [43.3, 7788.0], [43.4, 7788.0], [43.5, 7788.0], [43.6, 7788.0], [43.7, 7906.0], [43.8, 7906.0], [43.9, 7906.0], [44.0, 7906.0], [44.1, 7906.0], [44.2, 7906.0], [44.3, 7906.0], [44.4, 8028.0], [44.5, 8028.0], [44.6, 8028.0], [44.7, 8028.0], [44.8, 8028.0], [44.9, 8028.0], [45.0, 8028.0], [45.1, 8028.0], [45.2, 8145.0], [45.3, 8145.0], [45.4, 8145.0], [45.5, 8145.0], [45.6, 8145.0], [45.7, 8145.0], [45.8, 8145.0], [45.9, 8270.0], [46.0, 8270.0], [46.1, 8270.0], [46.2, 8270.0], [46.3, 8270.0], [46.4, 8270.0], [46.5, 8270.0], [46.6, 8270.0], [46.7, 8383.0], [46.8, 8383.0], [46.9, 8383.0], [47.0, 8383.0], [47.1, 8383.0], [47.2, 8383.0], [47.3, 8383.0], [47.4, 8493.0], [47.5, 8493.0], [47.6, 8493.0], [47.7, 8493.0], [47.8, 8493.0], [47.9, 8493.0], [48.0, 8493.0], [48.1, 8493.0], [48.2, 8610.0], [48.3, 8610.0], [48.4, 8610.0], [48.5, 8610.0], [48.6, 8610.0], [48.7, 8610.0], [48.8, 8610.0], [48.9, 8744.0], [49.0, 8744.0], [49.1, 8744.0], [49.2, 8744.0], [49.3, 8744.0], [49.4, 8744.0], [49.5, 8744.0], [49.6, 8744.0], [49.7, 8846.0], [49.8, 8846.0], [49.9, 8846.0], [50.0, 8846.0], [50.1, 8846.0], [50.2, 8846.0], [50.3, 8846.0], [50.4, 8957.0], [50.5, 8957.0], [50.6, 8957.0], [50.7, 8957.0], [50.8, 8957.0], [50.9, 8957.0], [51.0, 8957.0], [51.1, 8957.0], [51.2, 9099.0], [51.3, 9099.0], [51.4, 9099.0], [51.5, 9099.0], [51.6, 9099.0], [51.7, 9099.0], [51.8, 9099.0], [51.9, 9219.0], [52.0, 9219.0], [52.1, 9219.0], [52.2, 9219.0], [52.3, 9219.0], [52.4, 9219.0], [52.5, 9219.0], [52.6, 9219.0], [52.7, 9361.0], [52.8, 9361.0], [52.9, 9361.0], [53.0, 9361.0], [53.1, 9361.0], [53.2, 9361.0], [53.3, 9361.0], [53.4, 9535.0], [53.5, 9535.0], [53.6, 9535.0], [53.7, 9535.0], [53.8, 9535.0], [53.9, 9535.0], [54.0, 9535.0], [54.1, 9535.0], [54.2, 9687.0], [54.3, 9687.0], [54.4, 9687.0], [54.5, 9687.0], [54.6, 9687.0], [54.7, 9687.0], [54.8, 9687.0], [54.9, 9840.0], [55.0, 9840.0], [55.1, 9840.0], [55.2, 9840.0], [55.3, 9840.0], [55.4, 9840.0], [55.5, 9840.0], [55.6, 9840.0], [55.7, 9988.0], [55.8, 9988.0], [55.9, 9988.0], [56.0, 9988.0], [56.1, 9988.0], [56.2, 9988.0], [56.3, 9988.0], [56.4, 10160.0], [56.5, 10160.0], [56.6, 10160.0], [56.7, 10160.0], [56.8, 10160.0], [56.9, 10160.0], [57.0, 10160.0], [57.1, 10160.0], [57.2, 10275.0], [57.3, 10275.0], [57.4, 10275.0], [57.5, 10275.0], [57.6, 10275.0], [57.7, 10275.0], [57.8, 10275.0], [57.9, 10408.0], [58.0, 10408.0], [58.1, 10408.0], [58.2, 10408.0], [58.3, 10408.0], [58.4, 10408.0], [58.5, 10408.0], [58.6, 10408.0], [58.7, 10506.0], [58.8, 10506.0], [58.9, 10506.0], [59.0, 10506.0], [59.1, 10506.0], [59.2, 10506.0], [59.3, 10506.0], [59.4, 10638.0], [59.5, 10638.0], [59.6, 10638.0], [59.7, 10638.0], [59.8, 10638.0], [59.9, 10638.0], [60.0, 10638.0], [60.1, 10638.0], [60.2, 10739.0], [60.3, 10739.0], [60.4, 10739.0], [60.5, 10739.0], [60.6, 10739.0], [60.7, 10739.0], [60.8, 10739.0], [60.9, 10739.0], [61.0, 10913.0], [61.1, 10913.0], [61.2, 10913.0], [61.3, 10913.0], [61.4, 10913.0], [61.5, 10913.0], [61.6, 10913.0], [61.7, 10984.0], [61.8, 10984.0], [61.9, 10984.0], [62.0, 10984.0], [62.1, 10984.0], [62.2, 10984.0], [62.3, 10984.0], [62.4, 10984.0], [62.5, 11150.0], [62.6, 11150.0], [62.7, 11150.0], [62.8, 11150.0], [62.9, 11150.0], [63.0, 11150.0], [63.1, 11150.0], [63.2, 11247.0], [63.3, 11247.0], [63.4, 11247.0], [63.5, 11247.0], [63.6, 11247.0], [63.7, 11247.0], [63.8, 11247.0], [63.9, 11247.0], [64.0, 11380.0], [64.1, 11380.0], [64.2, 11380.0], [64.3, 11380.0], [64.4, 11380.0], [64.5, 11380.0], [64.6, 11380.0], [64.7, 11521.0], [64.8, 11521.0], [64.9, 11521.0], [65.0, 11521.0], [65.1, 11521.0], [65.2, 11521.0], [65.3, 11521.0], [65.4, 11521.0], [65.5, 11593.0], [65.6, 11593.0], [65.7, 11593.0], [65.8, 11593.0], [65.9, 11593.0], [66.0, 11593.0], [66.1, 11593.0], [66.2, 11711.0], [66.3, 11711.0], [66.4, 11711.0], [66.5, 11711.0], [66.6, 11711.0], [66.7, 11711.0], [66.8, 11711.0], [66.9, 11711.0], [67.0, 11828.0], [67.1, 11828.0], [67.2, 11828.0], [67.3, 11828.0], [67.4, 11828.0], [67.5, 11828.0], [67.6, 11828.0], [67.7, 11950.0], [67.8, 11950.0], [67.9, 11950.0], [68.0, 11950.0], [68.1, 11950.0], [68.2, 11950.0], [68.3, 11950.0], [68.4, 11950.0], [68.5, 12066.0], [68.6, 12066.0], [68.7, 12066.0], [68.8, 12066.0], [68.9, 12066.0], [69.0, 12066.0], [69.1, 12066.0], [69.2, 12183.0], [69.3, 12183.0], [69.4, 12183.0], [69.5, 12183.0], [69.6, 12183.0], [69.7, 12183.0], [69.8, 12183.0], [69.9, 12183.0], [70.0, 12301.0], [70.1, 12301.0], [70.2, 12301.0], [70.3, 12301.0], [70.4, 12301.0], [70.5, 12301.0], [70.6, 12301.0], [70.7, 12374.0], [70.8, 12374.0], [70.9, 12374.0], [71.0, 12374.0], [71.1, 12374.0], [71.2, 12374.0], [71.3, 12374.0], [71.4, 12374.0], [71.5, 12427.0], [71.6, 12427.0], [71.7, 12427.0], [71.8, 12427.0], [71.9, 12427.0], [72.0, 12427.0], [72.1, 12427.0], [72.2, 12695.0], [72.3, 12695.0], [72.4, 12695.0], [72.5, 12695.0], [72.6, 12695.0], [72.7, 12695.0], [72.8, 12695.0], [72.9, 12695.0], [73.0, 12843.0], [73.1, 12843.0], [73.2, 12843.0], [73.3, 12843.0], [73.4, 12843.0], [73.5, 12843.0], [73.6, 12843.0], [73.7, 13032.0], [73.8, 13032.0], [73.9, 13032.0], [74.0, 13032.0], [74.1, 13032.0], [74.2, 13032.0], [74.3, 13032.0], [74.4, 13032.0], [74.5, 13405.0], [74.6, 13405.0], [74.7, 13405.0], [74.8, 13405.0], [74.9, 13405.0], [75.0, 13405.0], [75.1, 13405.0], [75.2, 13417.0], [75.3, 13417.0], [75.4, 13417.0], [75.5, 13417.0], [75.6, 13417.0], [75.7, 13417.0], [75.8, 13417.0], [75.9, 13417.0], [76.0, 13527.0], [76.1, 13527.0], [76.2, 13527.0], [76.3, 13527.0], [76.4, 13527.0], [76.5, 13527.0], [76.6, 13527.0], [76.7, 13643.0], [76.8, 13643.0], [76.9, 13643.0], [77.0, 13643.0], [77.1, 13643.0], [77.2, 13643.0], [77.3, 13643.0], [77.4, 13643.0], [77.5, 13758.0], [77.6, 13758.0], [77.7, 13758.0], [77.8, 13758.0], [77.9, 13758.0], [78.0, 13758.0], [78.1, 13758.0], [78.2, 13846.0], [78.3, 13846.0], [78.4, 13846.0], [78.5, 13846.0], [78.6, 13846.0], [78.7, 13846.0], [78.8, 13846.0], [78.9, 13846.0], [79.0, 13904.0], [79.1, 13904.0], [79.2, 13904.0], [79.3, 13904.0], [79.4, 13904.0], [79.5, 13904.0], [79.6, 13904.0], [79.7, 13946.0], [79.8, 13946.0], [79.9, 13946.0], [80.0, 13946.0], [80.1, 13946.0], [80.2, 13946.0], [80.3, 13946.0], [80.4, 13946.0], [80.5, 14026.0], [80.6, 14026.0], [80.7, 14026.0], [80.8, 14026.0], [80.9, 14026.0], [81.0, 14026.0], [81.1, 14026.0], [81.2, 14026.0], [81.3, 14144.0], [81.4, 14144.0], [81.5, 14144.0], [81.6, 14144.0], [81.7, 14144.0], [81.8, 14144.0], [81.9, 14144.0], [82.0, 14266.0], [82.1, 14266.0], [82.2, 14266.0], [82.3, 14266.0], [82.4, 14266.0], [82.5, 14266.0], [82.6, 14266.0], [82.7, 14266.0], [82.8, 14387.0], [82.9, 14387.0], [83.0, 14387.0], [83.1, 14387.0], [83.2, 14387.0], [83.3, 14387.0], [83.4, 14387.0], [83.5, 14501.0], [83.6, 14501.0], [83.7, 14501.0], [83.8, 14501.0], [83.9, 14501.0], [84.0, 14501.0], [84.1, 14501.0], [84.2, 14501.0], [84.3, 14617.0], [84.4, 14617.0], [84.5, 14617.0], [84.6, 14617.0], [84.7, 14617.0], [84.8, 14617.0], [84.9, 14617.0], [85.0, 14734.0], [85.1, 14734.0], [85.2, 14734.0], [85.3, 14734.0], [85.4, 14734.0], [85.5, 14734.0], [85.6, 14734.0], [85.7, 14734.0], [85.8, 14852.0], [85.9, 14852.0], [86.0, 14852.0], [86.1, 14852.0], [86.2, 14852.0], [86.3, 14852.0], [86.4, 14852.0], [86.5, 14968.0], [86.6, 14968.0], [86.7, 14968.0], [86.8, 14968.0], [86.9, 14968.0], [87.0, 14968.0], [87.1, 14968.0], [87.2, 14968.0], [87.3, 15081.0], [87.4, 15081.0], [87.5, 15081.0], [87.6, 15081.0], [87.7, 15081.0], [87.8, 15081.0], [87.9, 15081.0], [88.0, 15202.0], [88.1, 15202.0], [88.2, 15202.0], [88.3, 15202.0], [88.4, 15202.0], [88.5, 15202.0], [88.6, 15202.0], [88.7, 15202.0], [88.8, 15312.0], [88.9, 15312.0], [89.0, 15312.0], [89.1, 15312.0], [89.2, 15312.0], [89.3, 15312.0], [89.4, 15312.0], [89.5, 15430.0], [89.6, 15430.0], [89.7, 15430.0], [89.8, 15430.0], [89.9, 15430.0], [90.0, 15430.0], [90.1, 15430.0], [90.2, 15430.0], [90.3, 15545.0], [90.4, 15545.0], [90.5, 15545.0], [90.6, 15545.0], [90.7, 15545.0], [90.8, 15545.0], [90.9, 15545.0], [91.0, 15654.0], [91.1, 15654.0], [91.2, 15654.0], [91.3, 15654.0], [91.4, 15654.0], [91.5, 15654.0], [91.6, 15654.0], [91.7, 15654.0], [91.8, 15768.0], [91.9, 15768.0], [92.0, 15768.0], [92.1, 15768.0], [92.2, 15768.0], [92.3, 15768.0], [92.4, 15768.0], [92.5, 15890.0], [92.6, 15890.0], [92.7, 15890.0], [92.8, 15890.0], [92.9, 15890.0], [93.0, 15890.0], [93.1, 15890.0], [93.2, 15890.0], [93.3, 16005.0], [93.4, 16005.0], [93.5, 16005.0], [93.6, 16005.0], [93.7, 16005.0], [93.8, 16005.0], [93.9, 16005.0], [94.0, 16125.0], [94.1, 16125.0], [94.2, 16125.0], [94.3, 16125.0], [94.4, 16125.0], [94.5, 16125.0], [94.6, 16125.0], [94.7, 16125.0], [94.8, 16242.0], [94.9, 16242.0], [95.0, 16242.0], [95.1, 16242.0], [95.2, 16242.0], [95.3, 16242.0], [95.4, 16242.0], [95.5, 16358.0], [95.6, 16358.0], [95.7, 16358.0], [95.8, 16358.0], [95.9, 16358.0], [96.0, 16358.0], [96.1, 16358.0], [96.2, 16358.0], [96.3, 16474.0], [96.4, 16474.0], [96.5, 16474.0], [96.6, 16474.0], [96.7, 16474.0], [96.8, 16474.0], [96.9, 16474.0], [97.0, 16589.0], [97.1, 16589.0], [97.2, 16589.0], [97.3, 16589.0], [97.4, 16589.0], [97.5, 16589.0], [97.6, 16589.0], [97.7, 16589.0], [97.8, 16708.0], [97.9, 16708.0], [98.0, 16708.0], [98.1, 16708.0], [98.2, 16708.0], [98.3, 16708.0], [98.4, 16708.0], [98.5, 16825.0], [98.6, 16825.0], [98.7, 16825.0], [98.8, 16825.0], [98.9, 16825.0], [99.0, 16825.0], [99.1, 16825.0], [99.2, 16825.0], [99.3, 16840.0], [99.4, 16840.0], [99.5, 16840.0], [99.6, 16840.0], [99.7, 16840.0], [99.8, 16840.0], [99.9, 16840.0], [100.0, 16840.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 2100.0, "maxY": 12.0, "series": [{"data": [[2100.0, 4.0], [3700.0, 1.0], [3800.0, 11.0], [5000.0, 12.0], [5200.0, 7.0], [5300.0, 2.0], [5500.0, 1.0], [5700.0, 3.0], [5800.0, 1.0], [5900.0, 1.0], [6100.0, 1.0], [6200.0, 1.0], [6300.0, 1.0], [6400.0, 1.0], [6500.0, 1.0], [6700.0, 1.0], [6800.0, 1.0], [6900.0, 1.0], [7000.0, 1.0], [7100.0, 1.0], [7300.0, 1.0], [7400.0, 1.0], [7500.0, 1.0], [7600.0, 1.0], [7700.0, 1.0], [7900.0, 1.0], [8000.0, 1.0], [8100.0, 1.0], [8200.0, 1.0], [8300.0, 1.0], [8400.0, 1.0], [8600.0, 1.0], [8700.0, 1.0], [8800.0, 1.0], [8900.0, 1.0], [9000.0, 1.0], [9200.0, 1.0], [9300.0, 1.0], [9500.0, 1.0], [9600.0, 1.0], [9800.0, 1.0], [9900.0, 1.0], [10100.0, 1.0], [10200.0, 1.0], [10400.0, 1.0], [10500.0, 1.0], [10600.0, 1.0], [10700.0, 1.0], [10900.0, 2.0], [11100.0, 1.0], [11200.0, 1.0], [11300.0, 1.0], [11500.0, 2.0], [11700.0, 1.0], [11800.0, 1.0], [11900.0, 1.0], [12000.0, 1.0], [12100.0, 1.0], [12300.0, 2.0], [12400.0, 1.0], [12600.0, 1.0], [12800.0, 1.0], [13000.0, 1.0], [13400.0, 2.0], [13500.0, 1.0], [13600.0, 1.0], [13700.0, 1.0], [13800.0, 1.0], [13900.0, 2.0], [14000.0, 1.0], [14100.0, 1.0], [14200.0, 1.0], [14300.0, 1.0], [14500.0, 1.0], [14600.0, 1.0], [14700.0, 1.0], [14800.0, 1.0], [14900.0, 1.0], [15000.0, 1.0], [15200.0, 1.0], [15300.0, 1.0], [15400.0, 1.0], [15500.0, 1.0], [15600.0, 1.0], [15700.0, 1.0], [15800.0, 1.0], [16000.0, 1.0], [16100.0, 1.0], [16200.0, 1.0], [16300.0, 1.0], [16400.0, 1.0], [16500.0, 1.0], [16700.0, 1.0], [16800.0, 2.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 16800.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 133.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 133.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 133.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 67.20300751879697, "minX": 1.79354166E12, "maxY": 67.20300751879697, "series": [{"data": [[1.79354166E12, 67.20300751879697]], "isOverall": false, "label": "Thread Group 6 ( 133 Users )", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79354166E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 2182.25, "minX": 1.0, "maxY": 16840.0, "series": [{"data": [[2.0, 16825.0], [3.0, 16708.0], [4.0, 16589.0], [5.0, 16474.0], [6.0, 16358.0], [7.0, 16242.0], [8.0, 16125.0], [9.0, 16005.0], [10.0, 15890.0], [11.0, 15768.0], [12.0, 15654.0], [13.0, 15545.0], [14.0, 15430.0], [15.0, 15312.0], [16.0, 15202.0], [17.0, 15081.0], [18.0, 14968.0], [19.0, 14852.0], [20.0, 14734.0], [21.0, 14617.0], [22.0, 14501.0], [23.0, 14387.0], [24.0, 14266.0], [25.0, 14144.0], [26.0, 14026.0], [27.0, 13904.0], [28.0, 13946.0], [29.0, 13846.0], [30.0, 13758.0], [31.0, 13643.0], [33.0, 13417.0], [32.0, 13527.0], [35.0, 13032.0], [34.0, 13405.0], [37.0, 12695.0], [36.0, 12843.0], [39.0, 12427.0], [38.0, 12374.0], [41.0, 12183.0], [40.0, 12301.0], [43.0, 11950.0], [42.0, 12066.0], [45.0, 11711.0], [44.0, 11828.0], [47.0, 11521.0], [46.0, 11593.0], [49.0, 11247.0], [48.0, 11380.0], [51.0, 10984.0], [50.0, 11150.0], [53.0, 10739.0], [52.0, 10913.0], [55.0, 10506.0], [54.0, 10638.0], [57.0, 10275.0], [56.0, 10408.0], [59.0, 9988.0], [58.0, 10160.0], [61.0, 9687.0], [60.0, 9840.0], [63.0, 9361.0], [62.0, 9535.0], [67.0, 8846.0], [66.0, 8957.0], [65.0, 9099.0], [64.0, 9219.0], [71.0, 8383.0], [70.0, 8493.0], [69.0, 8610.0], [68.0, 8744.0], [75.0, 7906.0], [74.0, 8028.0], [73.0, 8145.0], [72.0, 8270.0], [79.0, 7419.0], [78.0, 7558.0], [77.0, 7675.0], [76.0, 7788.0], [83.0, 6943.0], [82.0, 7068.0], [81.0, 7190.0], [80.0, 7303.0], [87.0, 6474.0], [86.0, 6580.0], [85.0, 6760.0], [84.0, 6836.0], [91.0, 5990.0], [90.0, 6119.0], [89.0, 6237.0], [88.0, 6356.0], [95.0, 5732.0], [94.0, 5733.0], [93.0, 5745.0], [92.0, 5859.0], [98.0, 5258.0], [97.0, 5264.0], [96.0, 5589.0], [103.0, 5292.5], [101.0, 5288.0], [100.0, 5300.0], [106.0, 5049.0], [105.0, 5299.0], [104.0, 5293.0], [110.0, 5019.0], [109.0, 5027.0], [114.0, 5024.5], [113.0, 5027.5], [112.0, 5035.0], [118.0, 3864.0], [117.0, 5025.5], [116.0, 5026.0], [123.0, 3832.0], [122.0, 3815.5], [121.0, 3824.0], [120.0, 3816.0], [127.0, 3817.0], [126.0, 3822.6666666666665], [133.0, 2182.25], [129.0, 3782.0], [128.0, 3805.0], [1.0, 16840.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[67.20300751879697, 9334.308270676695]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 133.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 602.9333333333333, "minX": 1.79354166E12, "maxY": 1239.1166666666666, "series": [{"data": [[1.79354166E12, 1239.1166666666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.79354166E12, 602.9333333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79354166E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 9334.308270676695, "minX": 1.79354166E12, "maxY": 9334.308270676695, "series": [{"data": [[1.79354166E12, 9334.308270676695]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79354166E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 9333.729323308273, "minX": 1.79354166E12, "maxY": 9333.729323308273, "series": [{"data": [[1.79354166E12, 9333.729323308273]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79354166E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 115.87969924812029, "minX": 1.79354166E12, "maxY": 115.87969924812029, "series": [{"data": [[1.79354166E12, 115.87969924812029]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79354166E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 2157.0, "minX": 1.79354166E12, "maxY": 16840.0, "series": [{"data": [[1.79354166E12, 16840.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.79354166E12, 15499.000000000002]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.79354166E12, 16834.9]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.79354166E12, 16276.8]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.79354166E12, 2157.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.79354166E12, 8846.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79354166E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 2186.5, "minX": 4.0, "maxY": 15430.0, "series": [{"data": [[4.0, 2186.5], [16.0, 5309.5], [8.0, 11198.5], [9.0, 15430.0], [12.0, 4434.0], [7.0, 11171.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 16.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 2167.5, "minX": 4.0, "maxY": 15430.0, "series": [{"data": [[4.0, 2167.5], [16.0, 5309.5], [8.0, 11198.5], [9.0, 15430.0], [12.0, 4433.5], [7.0, 11171.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 16.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 2.216666666666667, "minX": 1.79354166E12, "maxY": 2.216666666666667, "series": [{"data": [[1.79354166E12, 2.216666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79354166E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 2.216666666666667, "minX": 1.79354166E12, "maxY": 2.216666666666667, "series": [{"data": [[1.79354166E12, 2.216666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79354166E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 2.216666666666667, "minX": 1.79354166E12, "maxY": 2.216666666666667, "series": [{"data": [[1.79354166E12, 2.216666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79354166E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 2.216666666666667, "minX": 1.79354166E12, "maxY": 2.216666666666667, "series": [{"data": [[1.79354166E12, 2.216666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79354166E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

