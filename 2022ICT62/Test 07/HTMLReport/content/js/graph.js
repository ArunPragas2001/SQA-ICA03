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
        data: {"result": {"minY": 1256.0, "minX": 0.0, "maxY": 17639.0, "series": [{"data": [[0.0, 1256.0], [0.1, 1256.0], [0.2, 1256.0], [0.3, 1256.0], [0.4, 1256.0], [0.5, 1256.0], [0.6, 1256.0], [0.7, 1256.0], [0.8, 1258.0], [0.9, 1258.0], [1.0, 1258.0], [1.1, 1258.0], [1.2, 1258.0], [1.3, 1258.0], [1.4, 1258.0], [1.5, 1277.0], [1.6, 1277.0], [1.7, 1277.0], [1.8, 1277.0], [1.9, 1277.0], [2.0, 1277.0], [2.1, 1277.0], [2.2, 1277.0], [2.3, 1280.0], [2.4, 1280.0], [2.5, 1280.0], [2.6, 1280.0], [2.7, 1280.0], [2.8, 1280.0], [2.9, 1280.0], [3.0, 1488.0], [3.1, 1488.0], [3.2, 1488.0], [3.3, 1488.0], [3.4, 1488.0], [3.5, 1488.0], [3.6, 1488.0], [3.7, 1488.0], [3.8, 1510.0], [3.9, 1510.0], [4.0, 1510.0], [4.1, 1510.0], [4.2, 1510.0], [4.3, 1510.0], [4.4, 1510.0], [4.5, 1513.0], [4.6, 1513.0], [4.7, 1513.0], [4.8, 1513.0], [4.9, 1513.0], [5.0, 1513.0], [5.1, 1513.0], [5.2, 1527.0], [5.3, 1527.0], [5.4, 1527.0], [5.5, 1527.0], [5.6, 1527.0], [5.7, 1527.0], [5.8, 1527.0], [5.9, 1527.0], [6.0, 1537.0], [6.1, 1537.0], [6.2, 1537.0], [6.3, 1537.0], [6.4, 1537.0], [6.5, 1537.0], [6.6, 1537.0], [6.7, 1547.0], [6.8, 1547.0], [6.9, 1547.0], [7.0, 1547.0], [7.1, 1547.0], [7.2, 1547.0], [7.3, 1547.0], [7.4, 1547.0], [7.5, 1625.0], [7.6, 1625.0], [7.7, 1625.0], [7.8, 1625.0], [7.9, 1625.0], [8.0, 1625.0], [8.1, 1625.0], [8.2, 1739.0], [8.3, 1739.0], [8.4, 1739.0], [8.5, 1739.0], [8.6, 1739.0], [8.7, 1739.0], [8.8, 1739.0], [8.9, 1899.0], [9.0, 1899.0], [9.1, 1899.0], [9.2, 1899.0], [9.3, 1899.0], [9.4, 1899.0], [9.5, 1899.0], [9.6, 1899.0], [9.7, 2090.0], [9.8, 2090.0], [9.9, 2090.0], [10.0, 2090.0], [10.1, 2090.0], [10.2, 2090.0], [10.3, 2090.0], [10.4, 2270.0], [10.5, 2270.0], [10.6, 2270.0], [10.7, 2270.0], [10.8, 2270.0], [10.9, 2270.0], [11.0, 2270.0], [11.1, 2270.0], [11.2, 2392.0], [11.3, 2392.0], [11.4, 2392.0], [11.5, 2392.0], [11.6, 2392.0], [11.7, 2392.0], [11.8, 2392.0], [11.9, 2489.0], [12.0, 2489.0], [12.1, 2489.0], [12.2, 2489.0], [12.3, 2489.0], [12.4, 2489.0], [12.5, 2489.0], [12.6, 2612.0], [12.7, 2612.0], [12.8, 2612.0], [12.9, 2612.0], [13.0, 2612.0], [13.1, 2612.0], [13.2, 2612.0], [13.3, 2612.0], [13.4, 2747.0], [13.5, 2747.0], [13.6, 2747.0], [13.7, 2747.0], [13.8, 2747.0], [13.9, 2747.0], [14.0, 2747.0], [14.1, 2861.0], [14.2, 2861.0], [14.3, 2861.0], [14.4, 2861.0], [14.5, 2861.0], [14.6, 2861.0], [14.7, 2861.0], [14.8, 2861.0], [14.9, 2990.0], [15.0, 2990.0], [15.1, 2990.0], [15.2, 2990.0], [15.3, 2990.0], [15.4, 2990.0], [15.5, 2990.0], [15.6, 3108.0], [15.7, 3108.0], [15.8, 3108.0], [15.9, 3108.0], [16.0, 3108.0], [16.1, 3108.0], [16.2, 3108.0], [16.3, 3229.0], [16.4, 3229.0], [16.5, 3229.0], [16.6, 3229.0], [16.7, 3229.0], [16.8, 3229.0], [16.9, 3229.0], [17.0, 3229.0], [17.1, 3343.0], [17.2, 3343.0], [17.3, 3343.0], [17.4, 3343.0], [17.5, 3343.0], [17.6, 3343.0], [17.7, 3343.0], [17.8, 3448.0], [17.9, 3448.0], [18.0, 3448.0], [18.1, 3448.0], [18.2, 3448.0], [18.3, 3448.0], [18.4, 3448.0], [18.5, 3448.0], [18.6, 3591.0], [18.7, 3591.0], [18.8, 3591.0], [18.9, 3591.0], [19.0, 3591.0], [19.1, 3591.0], [19.2, 3591.0], [19.3, 3701.0], [19.4, 3701.0], [19.5, 3701.0], [19.6, 3701.0], [19.7, 3701.0], [19.8, 3701.0], [19.9, 3701.0], [20.0, 3832.0], [20.1, 3832.0], [20.2, 3832.0], [20.3, 3832.0], [20.4, 3832.0], [20.5, 3832.0], [20.6, 3832.0], [20.7, 3832.0], [20.8, 3948.0], [20.9, 3948.0], [21.0, 3948.0], [21.1, 3948.0], [21.2, 3948.0], [21.3, 3948.0], [21.4, 3948.0], [21.5, 4064.0], [21.6, 4064.0], [21.7, 4064.0], [21.8, 4064.0], [21.9, 4064.0], [22.0, 4064.0], [22.1, 4064.0], [22.2, 4064.0], [22.3, 4188.0], [22.4, 4188.0], [22.5, 4188.0], [22.6, 4188.0], [22.7, 4188.0], [22.8, 4188.0], [22.9, 4188.0], [23.0, 4316.0], [23.1, 4316.0], [23.2, 4316.0], [23.3, 4316.0], [23.4, 4316.0], [23.5, 4316.0], [23.6, 4316.0], [23.7, 4316.0], [23.8, 4442.0], [23.9, 4442.0], [24.0, 4442.0], [24.1, 4442.0], [24.2, 4442.0], [24.3, 4442.0], [24.4, 4442.0], [24.5, 4558.0], [24.6, 4558.0], [24.7, 4558.0], [24.8, 4558.0], [24.9, 4558.0], [25.0, 4558.0], [25.1, 4558.0], [25.2, 4675.0], [25.3, 4675.0], [25.4, 4675.0], [25.5, 4675.0], [25.6, 4675.0], [25.7, 4675.0], [25.8, 4675.0], [25.9, 4675.0], [26.0, 4824.0], [26.1, 4824.0], [26.2, 4824.0], [26.3, 4824.0], [26.4, 4824.0], [26.5, 4824.0], [26.6, 4824.0], [26.7, 4940.0], [26.8, 4940.0], [26.9, 4940.0], [27.0, 4940.0], [27.1, 4940.0], [27.2, 4940.0], [27.3, 4940.0], [27.4, 4940.0], [27.5, 5126.0], [27.6, 5126.0], [27.7, 5126.0], [27.8, 5126.0], [27.9, 5126.0], [28.0, 5126.0], [28.1, 5126.0], [28.2, 5253.0], [28.3, 5253.0], [28.4, 5253.0], [28.5, 5253.0], [28.6, 5253.0], [28.7, 5253.0], [28.8, 5253.0], [28.9, 5345.0], [29.0, 5345.0], [29.1, 5345.0], [29.2, 5345.0], [29.3, 5345.0], [29.4, 5345.0], [29.5, 5345.0], [29.6, 5345.0], [29.7, 5469.0], [29.8, 5469.0], [29.9, 5469.0], [30.0, 5469.0], [30.1, 5469.0], [30.2, 5469.0], [30.3, 5469.0], [30.4, 5589.0], [30.5, 5589.0], [30.6, 5589.0], [30.7, 5589.0], [30.8, 5589.0], [30.9, 5589.0], [31.0, 5589.0], [31.1, 5589.0], [31.2, 5725.0], [31.3, 5725.0], [31.4, 5725.0], [31.5, 5725.0], [31.6, 5725.0], [31.7, 5725.0], [31.8, 5725.0], [31.9, 5828.0], [32.0, 5828.0], [32.1, 5828.0], [32.2, 5828.0], [32.3, 5828.0], [32.4, 5828.0], [32.5, 5828.0], [32.6, 5945.0], [32.7, 5945.0], [32.8, 5945.0], [32.9, 5945.0], [33.0, 5945.0], [33.1, 5945.0], [33.2, 5945.0], [33.3, 5945.0], [33.4, 6060.0], [33.5, 6060.0], [33.6, 6060.0], [33.7, 6060.0], [33.8, 6060.0], [33.9, 6060.0], [34.0, 6060.0], [34.1, 6199.0], [34.2, 6199.0], [34.3, 6199.0], [34.4, 6199.0], [34.5, 6199.0], [34.6, 6199.0], [34.7, 6199.0], [34.8, 6199.0], [34.9, 6323.0], [35.0, 6323.0], [35.1, 6323.0], [35.2, 6323.0], [35.3, 6323.0], [35.4, 6323.0], [35.5, 6323.0], [35.6, 6441.0], [35.7, 6441.0], [35.8, 6441.0], [35.9, 6441.0], [36.0, 6441.0], [36.1, 6441.0], [36.2, 6441.0], [36.3, 6590.0], [36.4, 6590.0], [36.5, 6590.0], [36.6, 6590.0], [36.7, 6590.0], [36.8, 6590.0], [36.9, 6590.0], [37.0, 6590.0], [37.1, 6724.0], [37.2, 6724.0], [37.3, 6724.0], [37.4, 6724.0], [37.5, 6724.0], [37.6, 6724.0], [37.7, 6724.0], [37.8, 6868.0], [37.9, 6868.0], [38.0, 6868.0], [38.1, 6868.0], [38.2, 6868.0], [38.3, 6868.0], [38.4, 6868.0], [38.5, 6868.0], [38.6, 6993.0], [38.7, 6993.0], [38.8, 6993.0], [38.9, 6993.0], [39.0, 6993.0], [39.1, 6993.0], [39.2, 6993.0], [39.3, 7130.0], [39.4, 7130.0], [39.5, 7130.0], [39.6, 7130.0], [39.7, 7130.0], [39.8, 7130.0], [39.9, 7130.0], [40.0, 7234.0], [40.1, 7234.0], [40.2, 7234.0], [40.3, 7234.0], [40.4, 7234.0], [40.5, 7234.0], [40.6, 7234.0], [40.7, 7234.0], [40.8, 7367.0], [40.9, 7367.0], [41.0, 7367.0], [41.1, 7367.0], [41.2, 7367.0], [41.3, 7367.0], [41.4, 7367.0], [41.5, 7489.0], [41.6, 7489.0], [41.7, 7489.0], [41.8, 7489.0], [41.9, 7489.0], [42.0, 7489.0], [42.1, 7489.0], [42.2, 7489.0], [42.3, 7587.0], [42.4, 7587.0], [42.5, 7587.0], [42.6, 7587.0], [42.7, 7587.0], [42.8, 7587.0], [42.9, 7587.0], [43.0, 7707.0], [43.1, 7707.0], [43.2, 7707.0], [43.3, 7707.0], [43.4, 7707.0], [43.5, 7707.0], [43.6, 7707.0], [43.7, 7707.0], [43.8, 7844.0], [43.9, 7844.0], [44.0, 7844.0], [44.1, 7844.0], [44.2, 7844.0], [44.3, 7844.0], [44.4, 7844.0], [44.5, 7962.0], [44.6, 7962.0], [44.7, 7962.0], [44.8, 7962.0], [44.9, 7962.0], [45.0, 7962.0], [45.1, 7962.0], [45.2, 8081.0], [45.3, 8081.0], [45.4, 8081.0], [45.5, 8081.0], [45.6, 8081.0], [45.7, 8081.0], [45.8, 8081.0], [45.9, 8081.0], [46.0, 8236.0], [46.1, 8236.0], [46.2, 8236.0], [46.3, 8236.0], [46.4, 8236.0], [46.5, 8236.0], [46.6, 8236.0], [46.7, 8341.0], [46.8, 8341.0], [46.9, 8341.0], [47.0, 8341.0], [47.1, 8341.0], [47.2, 8341.0], [47.3, 8341.0], [47.4, 8341.0], [47.5, 8493.0], [47.6, 8493.0], [47.7, 8493.0], [47.8, 8493.0], [47.9, 8493.0], [48.0, 8493.0], [48.1, 8493.0], [48.2, 8639.0], [48.3, 8639.0], [48.4, 8639.0], [48.5, 8639.0], [48.6, 8639.0], [48.7, 8639.0], [48.8, 8639.0], [48.9, 8750.0], [49.0, 8750.0], [49.1, 8750.0], [49.2, 8750.0], [49.3, 8750.0], [49.4, 8750.0], [49.5, 8750.0], [49.6, 8750.0], [49.7, 8883.0], [49.8, 8883.0], [49.9, 8883.0], [50.0, 8883.0], [50.1, 8883.0], [50.2, 8883.0], [50.3, 8883.0], [50.4, 8987.0], [50.5, 8987.0], [50.6, 8987.0], [50.7, 8987.0], [50.8, 8987.0], [50.9, 8987.0], [51.0, 8987.0], [51.1, 8987.0], [51.2, 9139.0], [51.3, 9139.0], [51.4, 9139.0], [51.5, 9139.0], [51.6, 9139.0], [51.7, 9139.0], [51.8, 9139.0], [51.9, 9306.0], [52.0, 9306.0], [52.1, 9306.0], [52.2, 9306.0], [52.3, 9306.0], [52.4, 9306.0], [52.5, 9306.0], [52.6, 9471.0], [52.7, 9471.0], [52.8, 9471.0], [52.9, 9471.0], [53.0, 9471.0], [53.1, 9471.0], [53.2, 9471.0], [53.3, 9471.0], [53.4, 9605.0], [53.5, 9605.0], [53.6, 9605.0], [53.7, 9605.0], [53.8, 9605.0], [53.9, 9605.0], [54.0, 9605.0], [54.1, 9723.0], [54.2, 9723.0], [54.3, 9723.0], [54.4, 9723.0], [54.5, 9723.0], [54.6, 9723.0], [54.7, 9723.0], [54.8, 9723.0], [54.9, 9828.0], [55.0, 9828.0], [55.1, 9828.0], [55.2, 9828.0], [55.3, 9828.0], [55.4, 9828.0], [55.5, 9828.0], [55.6, 9948.0], [55.7, 9948.0], [55.8, 9948.0], [55.9, 9948.0], [56.0, 9948.0], [56.1, 9948.0], [56.2, 9948.0], [56.3, 10080.0], [56.4, 10080.0], [56.5, 10080.0], [56.6, 10080.0], [56.7, 10080.0], [56.8, 10080.0], [56.9, 10080.0], [57.0, 10080.0], [57.1, 10183.0], [57.2, 10183.0], [57.3, 10183.0], [57.4, 10183.0], [57.5, 10183.0], [57.6, 10183.0], [57.7, 10183.0], [57.8, 10299.0], [57.9, 10299.0], [58.0, 10299.0], [58.1, 10299.0], [58.2, 10299.0], [58.3, 10299.0], [58.4, 10299.0], [58.5, 10299.0], [58.6, 10417.0], [58.7, 10417.0], [58.8, 10417.0], [58.9, 10417.0], [59.0, 10417.0], [59.1, 10417.0], [59.2, 10417.0], [59.3, 10539.0], [59.4, 10539.0], [59.5, 10539.0], [59.6, 10539.0], [59.7, 10539.0], [59.8, 10539.0], [59.9, 10539.0], [60.0, 10665.0], [60.1, 10665.0], [60.2, 10665.0], [60.3, 10665.0], [60.4, 10665.0], [60.5, 10665.0], [60.6, 10665.0], [60.7, 10665.0], [60.8, 10798.0], [60.9, 10798.0], [61.0, 10798.0], [61.1, 10798.0], [61.2, 10798.0], [61.3, 10798.0], [61.4, 10798.0], [61.5, 10935.0], [61.6, 10935.0], [61.7, 10935.0], [61.8, 10935.0], [61.9, 10935.0], [62.0, 10935.0], [62.1, 10935.0], [62.2, 10935.0], [62.3, 11050.0], [62.4, 11050.0], [62.5, 11050.0], [62.6, 11050.0], [62.7, 11050.0], [62.8, 11050.0], [62.9, 11050.0], [63.0, 11196.0], [63.1, 11196.0], [63.2, 11196.0], [63.3, 11196.0], [63.4, 11196.0], [63.5, 11196.0], [63.6, 11196.0], [63.7, 11196.0], [63.8, 11316.0], [63.9, 11316.0], [64.0, 11316.0], [64.1, 11316.0], [64.2, 11316.0], [64.3, 11316.0], [64.4, 11316.0], [64.5, 11432.0], [64.6, 11432.0], [64.7, 11432.0], [64.8, 11432.0], [64.9, 11432.0], [65.0, 11432.0], [65.1, 11432.0], [65.2, 11554.0], [65.3, 11554.0], [65.4, 11554.0], [65.5, 11554.0], [65.6, 11554.0], [65.7, 11554.0], [65.8, 11554.0], [65.9, 11554.0], [66.0, 11689.0], [66.1, 11689.0], [66.2, 11689.0], [66.3, 11689.0], [66.4, 11689.0], [66.5, 11689.0], [66.6, 11689.0], [66.7, 11829.0], [66.8, 11829.0], [66.9, 11829.0], [67.0, 11829.0], [67.1, 11829.0], [67.2, 11829.0], [67.3, 11829.0], [67.4, 11829.0], [67.5, 11930.0], [67.6, 11930.0], [67.7, 11930.0], [67.8, 11930.0], [67.9, 11930.0], [68.0, 11930.0], [68.1, 11930.0], [68.2, 12051.0], [68.3, 12051.0], [68.4, 12051.0], [68.5, 12051.0], [68.6, 12051.0], [68.7, 12051.0], [68.8, 12051.0], [68.9, 12193.0], [69.0, 12193.0], [69.1, 12193.0], [69.2, 12193.0], [69.3, 12193.0], [69.4, 12193.0], [69.5, 12193.0], [69.6, 12193.0], [69.7, 12303.0], [69.8, 12303.0], [69.9, 12303.0], [70.0, 12303.0], [70.1, 12303.0], [70.2, 12303.0], [70.3, 12303.0], [70.4, 12443.0], [70.5, 12443.0], [70.6, 12443.0], [70.7, 12443.0], [70.8, 12443.0], [70.9, 12443.0], [71.0, 12443.0], [71.1, 12443.0], [71.2, 12579.0], [71.3, 12579.0], [71.4, 12579.0], [71.5, 12579.0], [71.6, 12579.0], [71.7, 12579.0], [71.8, 12579.0], [71.9, 12712.0], [72.0, 12712.0], [72.1, 12712.0], [72.2, 12712.0], [72.3, 12712.0], [72.4, 12712.0], [72.5, 12712.0], [72.6, 12835.0], [72.7, 12835.0], [72.8, 12835.0], [72.9, 12835.0], [73.0, 12835.0], [73.1, 12835.0], [73.2, 12835.0], [73.3, 12835.0], [73.4, 12972.0], [73.5, 12972.0], [73.6, 12972.0], [73.7, 12972.0], [73.8, 12972.0], [73.9, 12972.0], [74.0, 12972.0], [74.1, 13100.0], [74.2, 13100.0], [74.3, 13100.0], [74.4, 13100.0], [74.5, 13100.0], [74.6, 13100.0], [74.7, 13100.0], [74.8, 13100.0], [74.9, 13235.0], [75.0, 13235.0], [75.1, 13235.0], [75.2, 13235.0], [75.3, 13235.0], [75.4, 13235.0], [75.5, 13235.0], [75.6, 13358.0], [75.7, 13358.0], [75.8, 13358.0], [75.9, 13358.0], [76.0, 13358.0], [76.1, 13358.0], [76.2, 13358.0], [76.3, 13495.0], [76.4, 13495.0], [76.5, 13495.0], [76.6, 13495.0], [76.7, 13495.0], [76.8, 13495.0], [76.9, 13495.0], [77.0, 13495.0], [77.1, 13607.0], [77.2, 13607.0], [77.3, 13607.0], [77.4, 13607.0], [77.5, 13607.0], [77.6, 13607.0], [77.7, 13607.0], [77.8, 13775.0], [77.9, 13775.0], [78.0, 13775.0], [78.1, 13775.0], [78.2, 13775.0], [78.3, 13775.0], [78.4, 13775.0], [78.5, 13775.0], [78.6, 13889.0], [78.7, 13889.0], [78.8, 13889.0], [78.9, 13889.0], [79.0, 13889.0], [79.1, 13889.0], [79.2, 13889.0], [79.3, 14010.0], [79.4, 14010.0], [79.5, 14010.0], [79.6, 14010.0], [79.7, 14010.0], [79.8, 14010.0], [79.9, 14010.0], [80.0, 14010.0], [80.1, 14134.0], [80.2, 14134.0], [80.3, 14134.0], [80.4, 14134.0], [80.5, 14134.0], [80.6, 14134.0], [80.7, 14134.0], [80.8, 14261.0], [80.9, 14261.0], [81.0, 14261.0], [81.1, 14261.0], [81.2, 14261.0], [81.3, 14261.0], [81.4, 14261.0], [81.5, 14371.0], [81.6, 14371.0], [81.7, 14371.0], [81.8, 14371.0], [81.9, 14371.0], [82.0, 14371.0], [82.1, 14371.0], [82.2, 14371.0], [82.3, 14492.0], [82.4, 14492.0], [82.5, 14492.0], [82.6, 14492.0], [82.7, 14492.0], [82.8, 14492.0], [82.9, 14492.0], [83.0, 14603.0], [83.1, 14603.0], [83.2, 14603.0], [83.3, 14603.0], [83.4, 14603.0], [83.5, 14603.0], [83.6, 14603.0], [83.7, 14603.0], [83.8, 14709.0], [83.9, 14709.0], [84.0, 14709.0], [84.1, 14709.0], [84.2, 14709.0], [84.3, 14709.0], [84.4, 14709.0], [84.5, 14847.0], [84.6, 14847.0], [84.7, 14847.0], [84.8, 14847.0], [84.9, 14847.0], [85.0, 14847.0], [85.1, 14847.0], [85.2, 14966.0], [85.3, 14966.0], [85.4, 14966.0], [85.5, 14966.0], [85.6, 14966.0], [85.7, 14966.0], [85.8, 14966.0], [85.9, 14966.0], [86.0, 15101.0], [86.1, 15101.0], [86.2, 15101.0], [86.3, 15101.0], [86.4, 15101.0], [86.5, 15101.0], [86.6, 15101.0], [86.7, 15249.0], [86.8, 15249.0], [86.9, 15249.0], [87.0, 15249.0], [87.1, 15249.0], [87.2, 15249.0], [87.3, 15249.0], [87.4, 15249.0], [87.5, 15459.0], [87.6, 15459.0], [87.7, 15459.0], [87.8, 15459.0], [87.9, 15459.0], [88.0, 15459.0], [88.1, 15459.0], [88.2, 15638.0], [88.3, 15638.0], [88.4, 15638.0], [88.5, 15638.0], [88.6, 15638.0], [88.7, 15638.0], [88.8, 15638.0], [88.9, 15755.0], [89.0, 15755.0], [89.1, 15755.0], [89.2, 15755.0], [89.3, 15755.0], [89.4, 15755.0], [89.5, 15755.0], [89.6, 15755.0], [89.7, 15901.0], [89.8, 15901.0], [89.9, 15901.0], [90.0, 15901.0], [90.1, 15901.0], [90.2, 15901.0], [90.3, 15901.0], [90.4, 16046.0], [90.5, 16046.0], [90.6, 16046.0], [90.7, 16046.0], [90.8, 16046.0], [90.9, 16046.0], [91.0, 16046.0], [91.1, 16046.0], [91.2, 16198.0], [91.3, 16198.0], [91.4, 16198.0], [91.5, 16198.0], [91.6, 16198.0], [91.7, 16198.0], [91.8, 16198.0], [91.9, 16345.0], [92.0, 16345.0], [92.1, 16345.0], [92.2, 16345.0], [92.3, 16345.0], [92.4, 16345.0], [92.5, 16345.0], [92.6, 16474.0], [92.7, 16474.0], [92.8, 16474.0], [92.9, 16474.0], [93.0, 16474.0], [93.1, 16474.0], [93.2, 16474.0], [93.3, 16474.0], [93.4, 16584.0], [93.5, 16584.0], [93.6, 16584.0], [93.7, 16584.0], [93.8, 16584.0], [93.9, 16584.0], [94.0, 16584.0], [94.1, 16710.0], [94.2, 16710.0], [94.3, 16710.0], [94.4, 16710.0], [94.5, 16710.0], [94.6, 16710.0], [94.7, 16710.0], [94.8, 16710.0], [94.9, 16834.0], [95.0, 16834.0], [95.1, 16834.0], [95.2, 16834.0], [95.3, 16834.0], [95.4, 16834.0], [95.5, 16834.0], [95.6, 16990.0], [95.7, 16990.0], [95.8, 16990.0], [95.9, 16990.0], [96.0, 16990.0], [96.1, 16990.0], [96.2, 16990.0], [96.3, 17378.0], [96.4, 17378.0], [96.5, 17378.0], [96.6, 17378.0], [96.7, 17378.0], [96.8, 17378.0], [96.9, 17378.0], [97.0, 17378.0], [97.1, 17378.0], [97.2, 17378.0], [97.3, 17378.0], [97.4, 17378.0], [97.5, 17378.0], [97.6, 17378.0], [97.7, 17378.0], [97.8, 17518.0], [97.9, 17518.0], [98.0, 17518.0], [98.1, 17518.0], [98.2, 17518.0], [98.3, 17518.0], [98.4, 17518.0], [98.5, 17518.0], [98.6, 17634.0], [98.7, 17634.0], [98.8, 17634.0], [98.9, 17634.0], [99.0, 17634.0], [99.1, 17634.0], [99.2, 17634.0], [99.3, 17639.0], [99.4, 17639.0], [99.5, 17639.0], [99.6, 17639.0], [99.7, 17639.0], [99.8, 17639.0], [99.9, 17639.0], [100.0, 17639.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 1200.0, "maxY": 5.0, "series": [{"data": [[1200.0, 4.0], [1400.0, 1.0], [1500.0, 5.0], [1600.0, 1.0], [1700.0, 1.0], [1800.0, 1.0], [2000.0, 1.0], [2200.0, 1.0], [2300.0, 1.0], [2400.0, 1.0], [2600.0, 1.0], [2700.0, 1.0], [2800.0, 1.0], [2900.0, 1.0], [3100.0, 1.0], [3200.0, 1.0], [3300.0, 1.0], [3400.0, 1.0], [3500.0, 1.0], [3700.0, 1.0], [3800.0, 1.0], [3900.0, 1.0], [4000.0, 1.0], [4100.0, 1.0], [4300.0, 1.0], [4400.0, 1.0], [4500.0, 1.0], [4600.0, 1.0], [4800.0, 1.0], [4900.0, 1.0], [5100.0, 1.0], [5200.0, 1.0], [5300.0, 1.0], [5400.0, 1.0], [5500.0, 1.0], [5700.0, 1.0], [5800.0, 1.0], [5900.0, 1.0], [6000.0, 1.0], [6100.0, 1.0], [6300.0, 1.0], [6400.0, 1.0], [6500.0, 1.0], [6700.0, 1.0], [6800.0, 1.0], [6900.0, 1.0], [7100.0, 1.0], [7200.0, 1.0], [7300.0, 1.0], [7400.0, 1.0], [7500.0, 1.0], [7700.0, 1.0], [7800.0, 1.0], [7900.0, 1.0], [8000.0, 1.0], [8200.0, 1.0], [8300.0, 1.0], [8400.0, 1.0], [8600.0, 1.0], [8700.0, 1.0], [8800.0, 1.0], [8900.0, 1.0], [9100.0, 1.0], [9300.0, 1.0], [9400.0, 1.0], [9600.0, 1.0], [9700.0, 1.0], [9800.0, 1.0], [9900.0, 1.0], [10000.0, 1.0], [10100.0, 1.0], [10200.0, 1.0], [10400.0, 1.0], [10500.0, 1.0], [10600.0, 1.0], [10700.0, 1.0], [10900.0, 1.0], [11000.0, 1.0], [11100.0, 1.0], [11300.0, 1.0], [11400.0, 1.0], [11500.0, 1.0], [11600.0, 1.0], [11800.0, 1.0], [11900.0, 1.0], [12000.0, 1.0], [12100.0, 1.0], [12300.0, 1.0], [12400.0, 1.0], [12500.0, 1.0], [12700.0, 1.0], [12800.0, 1.0], [12900.0, 1.0], [13100.0, 1.0], [13200.0, 1.0], [13300.0, 1.0], [13400.0, 1.0], [13600.0, 1.0], [13700.0, 1.0], [13800.0, 1.0], [14000.0, 1.0], [14100.0, 1.0], [14200.0, 1.0], [14300.0, 1.0], [14400.0, 1.0], [14600.0, 1.0], [14700.0, 1.0], [14800.0, 1.0], [14900.0, 1.0], [15100.0, 1.0], [15200.0, 1.0], [15400.0, 1.0], [15600.0, 1.0], [15700.0, 1.0], [15900.0, 1.0], [16000.0, 1.0], [16100.0, 1.0], [16300.0, 1.0], [16400.0, 1.0], [16500.0, 1.0], [16700.0, 1.0], [16800.0, 1.0], [16900.0, 1.0], [17300.0, 2.0], [17500.0, 1.0], [17600.0, 2.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 17600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 5.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 130.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 5.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 130.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 68.06666666666663, "minX": 1.7935419E12, "maxY": 68.06666666666663, "series": [{"data": [[1.7935419E12, 68.06666666666663]], "isOverall": false, "label": "Thread Group 7 ( 135 Users )", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7935419E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 1267.75, "minX": 1.0, "maxY": 17639.0, "series": [{"data": [[2.0, 17639.0], [3.0, 17518.0], [4.0, 17378.0], [5.0, 17378.0], [6.0, 16990.0], [7.0, 16834.0], [8.0, 16710.0], [9.0, 16584.0], [10.0, 16474.0], [11.0, 16345.0], [12.0, 16198.0], [13.0, 16046.0], [14.0, 15901.0], [15.0, 15755.0], [16.0, 15638.0], [17.0, 15459.0], [18.0, 15249.0], [19.0, 15101.0], [20.0, 14966.0], [21.0, 14847.0], [22.0, 14709.0], [23.0, 14603.0], [24.0, 14492.0], [25.0, 14371.0], [26.0, 14261.0], [27.0, 14134.0], [28.0, 14010.0], [29.0, 13889.0], [30.0, 13775.0], [31.0, 13607.0], [33.0, 13358.0], [32.0, 13495.0], [35.0, 13100.0], [34.0, 13235.0], [37.0, 12835.0], [36.0, 12972.0], [39.0, 12579.0], [38.0, 12712.0], [41.0, 12303.0], [40.0, 12443.0], [43.0, 12051.0], [42.0, 12193.0], [45.0, 11829.0], [44.0, 11930.0], [47.0, 11554.0], [46.0, 11689.0], [49.0, 11316.0], [48.0, 11432.0], [51.0, 11050.0], [50.0, 11196.0], [53.0, 10798.0], [52.0, 10935.0], [55.0, 10539.0], [54.0, 10665.0], [57.0, 10299.0], [56.0, 10417.0], [59.0, 10080.0], [58.0, 10183.0], [61.0, 9828.0], [60.0, 9948.0], [63.0, 9605.0], [62.0, 9723.0], [67.0, 8987.0], [66.0, 9139.0], [65.0, 9306.0], [64.0, 9471.0], [71.0, 8493.0], [70.0, 8639.0], [69.0, 8750.0], [68.0, 8883.0], [75.0, 7962.0], [74.0, 8081.0], [73.0, 8236.0], [72.0, 8341.0], [79.0, 7489.0], [78.0, 7587.0], [77.0, 7707.0], [76.0, 7844.0], [83.0, 6993.0], [82.0, 7130.0], [81.0, 7234.0], [80.0, 7367.0], [87.0, 6441.0], [86.0, 6590.0], [85.0, 6724.0], [84.0, 6868.0], [91.0, 5945.0], [90.0, 6060.0], [89.0, 6199.0], [88.0, 6323.0], [95.0, 5469.0], [94.0, 5589.0], [93.0, 5725.0], [92.0, 5828.0], [99.0, 4940.0], [98.0, 5126.0], [97.0, 5253.0], [96.0, 5345.0], [103.0, 4442.0], [102.0, 4558.0], [101.0, 4675.0], [100.0, 4824.0], [107.0, 3948.0], [106.0, 4064.0], [105.0, 4188.0], [104.0, 4316.0], [111.0, 3448.0], [110.0, 3591.0], [109.0, 3701.0], [108.0, 3832.0], [115.0, 2990.0], [114.0, 3108.0], [113.0, 3229.0], [112.0, 3343.0], [119.0, 2489.0], [118.0, 2612.0], [117.0, 2747.0], [116.0, 2861.0], [123.0, 1899.0], [122.0, 2090.0], [121.0, 2270.0], [120.0, 2392.0], [126.0, 1547.0], [125.0, 1625.0], [124.0, 1739.0], [135.0, 1267.75], [131.0, 1510.0], [130.0, 1488.0], [129.0, 1525.6666666666667], [1.0, 17634.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[68.06666666666663, 8963.148148148144]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 135.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 612.0, "minX": 1.7935419E12, "maxY": 1257.75, "series": [{"data": [[1.7935419E12, 1257.75]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.7935419E12, 612.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7935419E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 8963.148148148144, "minX": 1.7935419E12, "maxY": 8963.148148148144, "series": [{"data": [[1.7935419E12, 8963.148148148144]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7935419E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 8962.822222222221, "minX": 1.7935419E12, "maxY": 8962.822222222221, "series": [{"data": [[1.7935419E12, 8962.822222222221]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7935419E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 126.33333333333336, "minX": 1.7935419E12, "maxY": 126.33333333333336, "series": [{"data": [[1.7935419E12, 126.33333333333336]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7935419E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 1256.0, "minX": 1.7935419E12, "maxY": 17639.0, "series": [{"data": [[1.7935419E12, 17639.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.7935419E12, 15959.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.7935419E12, 17637.2]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.7935419E12, 16865.199999999997]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.7935419E12, 1256.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.7935419E12, 8883.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7935419E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 1267.5, "minX": 4.0, "maxY": 17518.0, "series": [{"data": [[4.0, 1267.5], [8.0, 8288.5], [9.0, 8819.5], [5.0, 17518.0], [11.0, 1547.0], [6.0, 16271.5], [7.0, 10798.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 11.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 1262.0, "minX": 4.0, "maxY": 17518.0, "series": [{"data": [[4.0, 1262.0], [8.0, 8288.0], [9.0, 8819.5], [5.0, 17518.0], [11.0, 1547.0], [6.0, 16271.5], [7.0, 10798.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 11.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 2.25, "minX": 1.7935419E12, "maxY": 2.25, "series": [{"data": [[1.7935419E12, 2.25]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7935419E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 2.25, "minX": 1.7935419E12, "maxY": 2.25, "series": [{"data": [[1.7935419E12, 2.25]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7935419E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 2.25, "minX": 1.7935419E12, "maxY": 2.25, "series": [{"data": [[1.7935419E12, 2.25]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7935419E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 2.25, "minX": 1.7935419E12, "maxY": 2.25, "series": [{"data": [[1.7935419E12, 2.25]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7935419E12, "title": "Total Transactions Per Second"}},
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

