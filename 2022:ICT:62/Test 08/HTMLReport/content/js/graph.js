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
        data: {"result": {"minY": 2140.0, "minX": 0.0, "maxY": 19155.0, "series": [{"data": [[0.0, 2140.0], [0.1, 2140.0], [0.2, 2140.0], [0.3, 2140.0], [0.4, 2140.0], [0.5, 2140.0], [0.6, 2140.0], [0.7, 2140.0], [0.8, 2147.0], [0.9, 2147.0], [1.0, 2147.0], [1.1, 2147.0], [1.2, 2147.0], [1.3, 2147.0], [1.4, 2147.0], [1.5, 2209.0], [1.6, 2209.0], [1.7, 2209.0], [1.8, 2209.0], [1.9, 2209.0], [2.0, 2209.0], [2.1, 2209.0], [2.2, 2209.0], [2.3, 2250.0], [2.4, 2250.0], [2.5, 2250.0], [2.6, 2250.0], [2.7, 2250.0], [2.8, 2250.0], [2.9, 2250.0], [3.0, 2261.0], [3.1, 2261.0], [3.2, 2261.0], [3.3, 2261.0], [3.4, 2261.0], [3.5, 2261.0], [3.6, 2261.0], [3.7, 2261.0], [3.8, 2266.0], [3.9, 2266.0], [4.0, 2266.0], [4.1, 2266.0], [4.2, 2266.0], [4.3, 2266.0], [4.4, 2266.0], [4.5, 2269.0], [4.6, 2269.0], [4.7, 2269.0], [4.8, 2269.0], [4.9, 2269.0], [5.0, 2269.0], [5.1, 2269.0], [5.2, 2269.0], [5.3, 2272.0], [5.4, 2272.0], [5.5, 2272.0], [5.6, 2272.0], [5.7, 2272.0], [5.8, 2272.0], [5.9, 2272.0], [6.0, 4211.0], [6.1, 4211.0], [6.2, 4211.0], [6.3, 4211.0], [6.4, 4211.0], [6.5, 4211.0], [6.6, 4211.0], [6.7, 4211.0], [6.8, 4214.0], [6.9, 4214.0], [7.0, 4214.0], [7.1, 4214.0], [7.2, 4214.0], [7.3, 4214.0], [7.4, 4214.0], [7.5, 4756.0], [7.6, 4756.0], [7.7, 4756.0], [7.8, 4756.0], [7.9, 4756.0], [8.0, 4756.0], [8.1, 4756.0], [8.2, 4756.0], [8.3, 4761.0], [8.4, 4761.0], [8.5, 4761.0], [8.6, 4761.0], [8.7, 4761.0], [8.8, 4761.0], [8.9, 4761.0], [9.0, 4761.0], [9.1, 4761.0], [9.2, 4761.0], [9.3, 4761.0], [9.4, 4761.0], [9.5, 4761.0], [9.6, 4761.0], [9.7, 4761.0], [9.8, 4766.0], [9.9, 4766.0], [10.0, 4766.0], [10.1, 4766.0], [10.2, 4766.0], [10.3, 4766.0], [10.4, 4766.0], [10.5, 4767.0], [10.6, 4767.0], [10.7, 4767.0], [10.8, 4767.0], [10.9, 4767.0], [11.0, 4767.0], [11.1, 4767.0], [11.2, 4767.0], [11.3, 4767.0], [11.4, 4767.0], [11.5, 4767.0], [11.6, 4767.0], [11.7, 4767.0], [11.8, 4767.0], [11.9, 4767.0], [12.0, 4769.0], [12.1, 4769.0], [12.2, 4769.0], [12.3, 4769.0], [12.4, 4769.0], [12.5, 4769.0], [12.6, 4769.0], [12.7, 4770.0], [12.8, 4770.0], [12.9, 4770.0], [13.0, 4770.0], [13.1, 4770.0], [13.2, 4770.0], [13.3, 4770.0], [13.4, 4770.0], [13.5, 4771.0], [13.6, 4771.0], [13.7, 4771.0], [13.8, 4771.0], [13.9, 4771.0], [14.0, 4771.0], [14.1, 4771.0], [14.2, 4772.0], [14.3, 4772.0], [14.4, 4772.0], [14.5, 4772.0], [14.6, 4772.0], [14.7, 4772.0], [14.8, 4772.0], [14.9, 4772.0], [15.0, 4774.0], [15.1, 4774.0], [15.2, 4774.0], [15.3, 4774.0], [15.4, 4774.0], [15.5, 4774.0], [15.6, 4774.0], [15.7, 4775.0], [15.8, 4775.0], [15.9, 4775.0], [16.0, 4775.0], [16.1, 4775.0], [16.2, 4775.0], [16.3, 4775.0], [16.4, 4775.0], [16.5, 4778.0], [16.6, 4778.0], [16.7, 4778.0], [16.8, 4778.0], [16.9, 4778.0], [17.0, 4778.0], [17.1, 4778.0], [17.2, 4780.0], [17.3, 4780.0], [17.4, 4780.0], [17.5, 4780.0], [17.6, 4780.0], [17.7, 4780.0], [17.8, 4780.0], [17.9, 4780.0], [18.0, 4781.0], [18.1, 4781.0], [18.2, 4781.0], [18.3, 4781.0], [18.4, 4781.0], [18.5, 4781.0], [18.6, 4781.0], [18.7, 4782.0], [18.8, 4782.0], [18.9, 4782.0], [19.0, 4782.0], [19.1, 4782.0], [19.2, 4782.0], [19.3, 4782.0], [19.4, 4782.0], [19.5, 4806.0], [19.6, 4806.0], [19.7, 4806.0], [19.8, 4806.0], [19.9, 4806.0], [20.0, 4806.0], [20.1, 4806.0], [20.2, 4903.0], [20.3, 4903.0], [20.4, 4903.0], [20.5, 4903.0], [20.6, 4903.0], [20.7, 4903.0], [20.8, 4903.0], [20.9, 5124.0], [21.0, 5124.0], [21.1, 5124.0], [21.2, 5124.0], [21.3, 5124.0], [21.4, 5124.0], [21.5, 5124.0], [21.6, 5124.0], [21.7, 5371.0], [21.8, 5371.0], [21.9, 5371.0], [22.0, 5371.0], [22.1, 5371.0], [22.2, 5371.0], [22.3, 5371.0], [22.4, 5380.0], [22.5, 5380.0], [22.6, 5380.0], [22.7, 5380.0], [22.8, 5380.0], [22.9, 5380.0], [23.0, 5380.0], [23.1, 5380.0], [23.2, 5508.0], [23.3, 5508.0], [23.4, 5508.0], [23.5, 5508.0], [23.6, 5508.0], [23.7, 5508.0], [23.8, 5508.0], [23.9, 5515.0], [24.0, 5515.0], [24.1, 5515.0], [24.2, 5515.0], [24.3, 5515.0], [24.4, 5515.0], [24.5, 5515.0], [24.6, 5515.0], [24.7, 5635.0], [24.8, 5635.0], [24.9, 5635.0], [25.0, 5635.0], [25.1, 5635.0], [25.2, 5635.0], [25.3, 5635.0], [25.4, 5748.0], [25.5, 5748.0], [25.6, 5748.0], [25.7, 5748.0], [25.8, 5748.0], [25.9, 5748.0], [26.0, 5748.0], [26.1, 5748.0], [26.2, 5872.0], [26.3, 5872.0], [26.4, 5872.0], [26.5, 5872.0], [26.6, 5872.0], [26.7, 5872.0], [26.8, 5872.0], [26.9, 6013.0], [27.0, 6013.0], [27.1, 6013.0], [27.2, 6013.0], [27.3, 6013.0], [27.4, 6013.0], [27.5, 6013.0], [27.6, 6013.0], [27.7, 6145.0], [27.8, 6145.0], [27.9, 6145.0], [28.0, 6145.0], [28.1, 6145.0], [28.2, 6145.0], [28.3, 6145.0], [28.4, 6275.0], [28.5, 6275.0], [28.6, 6275.0], [28.7, 6275.0], [28.8, 6275.0], [28.9, 6275.0], [29.0, 6275.0], [29.1, 6275.0], [29.2, 6415.0], [29.3, 6415.0], [29.4, 6415.0], [29.5, 6415.0], [29.6, 6415.0], [29.7, 6415.0], [29.8, 6415.0], [29.9, 6596.0], [30.0, 6596.0], [30.1, 6596.0], [30.2, 6596.0], [30.3, 6596.0], [30.4, 6596.0], [30.5, 6596.0], [30.6, 6730.0], [30.7, 6730.0], [30.8, 6730.0], [30.9, 6730.0], [31.0, 6730.0], [31.1, 6730.0], [31.2, 6730.0], [31.3, 6730.0], [31.4, 6903.0], [31.5, 6903.0], [31.6, 6903.0], [31.7, 6903.0], [31.8, 6903.0], [31.9, 6903.0], [32.0, 6903.0], [32.1, 7109.0], [32.2, 7109.0], [32.3, 7109.0], [32.4, 7109.0], [32.5, 7109.0], [32.6, 7109.0], [32.7, 7109.0], [32.8, 7109.0], [32.9, 7241.0], [33.0, 7241.0], [33.1, 7241.0], [33.2, 7241.0], [33.3, 7241.0], [33.4, 7241.0], [33.5, 7241.0], [33.6, 7361.0], [33.7, 7361.0], [33.8, 7361.0], [33.9, 7361.0], [34.0, 7361.0], [34.1, 7361.0], [34.2, 7361.0], [34.3, 7361.0], [34.4, 7502.0], [34.5, 7502.0], [34.6, 7502.0], [34.7, 7502.0], [34.8, 7502.0], [34.9, 7502.0], [35.0, 7502.0], [35.1, 7896.0], [35.2, 7896.0], [35.3, 7896.0], [35.4, 7896.0], [35.5, 7896.0], [35.6, 7896.0], [35.7, 7896.0], [35.8, 7896.0], [35.9, 7897.0], [36.0, 7897.0], [36.1, 7897.0], [36.2, 7897.0], [36.3, 7897.0], [36.4, 7897.0], [36.5, 7897.0], [36.6, 8042.0], [36.7, 8042.0], [36.8, 8042.0], [36.9, 8042.0], [37.0, 8042.0], [37.1, 8042.0], [37.2, 8042.0], [37.3, 8042.0], [37.4, 8219.0], [37.5, 8219.0], [37.6, 8219.0], [37.7, 8219.0], [37.8, 8219.0], [37.9, 8219.0], [38.0, 8219.0], [38.1, 8336.0], [38.2, 8336.0], [38.3, 8336.0], [38.4, 8336.0], [38.5, 8336.0], [38.6, 8336.0], [38.7, 8336.0], [38.8, 8336.0], [38.9, 8458.0], [39.0, 8458.0], [39.1, 8458.0], [39.2, 8458.0], [39.3, 8458.0], [39.4, 8458.0], [39.5, 8458.0], [39.6, 8571.0], [39.7, 8571.0], [39.8, 8571.0], [39.9, 8571.0], [40.0, 8571.0], [40.1, 8571.0], [40.2, 8571.0], [40.3, 8687.0], [40.4, 8687.0], [40.5, 8687.0], [40.6, 8687.0], [40.7, 8687.0], [40.8, 8687.0], [40.9, 8687.0], [41.0, 8687.0], [41.1, 8807.0], [41.2, 8807.0], [41.3, 8807.0], [41.4, 8807.0], [41.5, 8807.0], [41.6, 8807.0], [41.7, 8807.0], [41.8, 8921.0], [41.9, 8921.0], [42.0, 8921.0], [42.1, 8921.0], [42.2, 8921.0], [42.3, 8921.0], [42.4, 8921.0], [42.5, 8921.0], [42.6, 9030.0], [42.7, 9030.0], [42.8, 9030.0], [42.9, 9030.0], [43.0, 9030.0], [43.1, 9030.0], [43.2, 9030.0], [43.3, 9161.0], [43.4, 9161.0], [43.5, 9161.0], [43.6, 9161.0], [43.7, 9161.0], [43.8, 9161.0], [43.9, 9161.0], [44.0, 9161.0], [44.1, 9274.0], [44.2, 9274.0], [44.3, 9274.0], [44.4, 9274.0], [44.5, 9274.0], [44.6, 9274.0], [44.7, 9274.0], [44.8, 9390.0], [44.9, 9390.0], [45.0, 9390.0], [45.1, 9390.0], [45.2, 9390.0], [45.3, 9390.0], [45.4, 9390.0], [45.5, 9390.0], [45.6, 9506.0], [45.7, 9506.0], [45.8, 9506.0], [45.9, 9506.0], [46.0, 9506.0], [46.1, 9506.0], [46.2, 9506.0], [46.3, 9621.0], [46.4, 9621.0], [46.5, 9621.0], [46.6, 9621.0], [46.7, 9621.0], [46.8, 9621.0], [46.9, 9621.0], [47.0, 9621.0], [47.1, 9739.0], [47.2, 9739.0], [47.3, 9739.0], [47.4, 9739.0], [47.5, 9739.0], [47.6, 9739.0], [47.7, 9739.0], [47.8, 9862.0], [47.9, 9862.0], [48.0, 9862.0], [48.1, 9862.0], [48.2, 9862.0], [48.3, 9862.0], [48.4, 9862.0], [48.5, 9862.0], [48.6, 9974.0], [48.7, 9974.0], [48.8, 9974.0], [48.9, 9974.0], [49.0, 9974.0], [49.1, 9974.0], [49.2, 9974.0], [49.3, 10106.0], [49.4, 10106.0], [49.5, 10106.0], [49.6, 10106.0], [49.7, 10106.0], [49.8, 10106.0], [49.9, 10106.0], [50.0, 10215.0], [50.1, 10215.0], [50.2, 10215.0], [50.3, 10215.0], [50.4, 10215.0], [50.5, 10215.0], [50.6, 10215.0], [50.7, 10215.0], [50.8, 10336.0], [50.9, 10336.0], [51.0, 10336.0], [51.1, 10336.0], [51.2, 10336.0], [51.3, 10336.0], [51.4, 10336.0], [51.5, 10456.0], [51.6, 10456.0], [51.7, 10456.0], [51.8, 10456.0], [51.9, 10456.0], [52.0, 10456.0], [52.1, 10456.0], [52.2, 10456.0], [52.3, 10580.0], [52.4, 10580.0], [52.5, 10580.0], [52.6, 10580.0], [52.7, 10580.0], [52.8, 10580.0], [52.9, 10580.0], [53.0, 10691.0], [53.1, 10691.0], [53.2, 10691.0], [53.3, 10691.0], [53.4, 10691.0], [53.5, 10691.0], [53.6, 10691.0], [53.7, 10691.0], [53.8, 10821.0], [53.9, 10821.0], [54.0, 10821.0], [54.1, 10821.0], [54.2, 10821.0], [54.3, 10821.0], [54.4, 10821.0], [54.5, 10929.0], [54.6, 10929.0], [54.7, 10929.0], [54.8, 10929.0], [54.9, 10929.0], [55.0, 10929.0], [55.1, 10929.0], [55.2, 10929.0], [55.3, 11048.0], [55.4, 11048.0], [55.5, 11048.0], [55.6, 11048.0], [55.7, 11048.0], [55.8, 11048.0], [55.9, 11048.0], [56.0, 11165.0], [56.1, 11165.0], [56.2, 11165.0], [56.3, 11165.0], [56.4, 11165.0], [56.5, 11165.0], [56.6, 11165.0], [56.7, 11165.0], [56.8, 11290.0], [56.9, 11290.0], [57.0, 11290.0], [57.1, 11290.0], [57.2, 11290.0], [57.3, 11290.0], [57.4, 11290.0], [57.5, 11411.0], [57.6, 11411.0], [57.7, 11411.0], [57.8, 11411.0], [57.9, 11411.0], [58.0, 11411.0], [58.1, 11411.0], [58.2, 11411.0], [58.3, 11518.0], [58.4, 11518.0], [58.5, 11518.0], [58.6, 11518.0], [58.7, 11518.0], [58.8, 11518.0], [58.9, 11518.0], [59.0, 11648.0], [59.1, 11648.0], [59.2, 11648.0], [59.3, 11648.0], [59.4, 11648.0], [59.5, 11648.0], [59.6, 11648.0], [59.7, 11648.0], [59.8, 11757.0], [59.9, 11757.0], [60.0, 11757.0], [60.1, 11757.0], [60.2, 11757.0], [60.3, 11757.0], [60.4, 11757.0], [60.5, 11872.0], [60.6, 11872.0], [60.7, 11872.0], [60.8, 11872.0], [60.9, 11872.0], [61.0, 11872.0], [61.1, 11872.0], [61.2, 11993.0], [61.3, 11993.0], [61.4, 11993.0], [61.5, 11993.0], [61.6, 11993.0], [61.7, 11993.0], [61.8, 11993.0], [61.9, 11993.0], [62.0, 12127.0], [62.1, 12127.0], [62.2, 12127.0], [62.3, 12127.0], [62.4, 12127.0], [62.5, 12127.0], [62.6, 12127.0], [62.7, 12316.0], [62.8, 12316.0], [62.9, 12316.0], [63.0, 12316.0], [63.1, 12316.0], [63.2, 12316.0], [63.3, 12316.0], [63.4, 12316.0], [63.5, 12497.0], [63.6, 12497.0], [63.7, 12497.0], [63.8, 12497.0], [63.9, 12497.0], [64.0, 12497.0], [64.1, 12497.0], [64.2, 12649.0], [64.3, 12649.0], [64.4, 12649.0], [64.5, 12649.0], [64.6, 12649.0], [64.7, 12649.0], [64.8, 12649.0], [64.9, 12649.0], [65.0, 12794.0], [65.1, 12794.0], [65.2, 12794.0], [65.3, 12794.0], [65.4, 12794.0], [65.5, 12794.0], [65.6, 12794.0], [65.7, 12913.0], [65.8, 12913.0], [65.9, 12913.0], [66.0, 12913.0], [66.1, 12913.0], [66.2, 12913.0], [66.3, 12913.0], [66.4, 12913.0], [66.5, 13033.0], [66.6, 13033.0], [66.7, 13033.0], [66.8, 13033.0], [66.9, 13033.0], [67.0, 13033.0], [67.1, 13033.0], [67.2, 13160.0], [67.3, 13160.0], [67.4, 13160.0], [67.5, 13160.0], [67.6, 13160.0], [67.7, 13160.0], [67.8, 13160.0], [67.9, 13160.0], [68.0, 13281.0], [68.1, 13281.0], [68.2, 13281.0], [68.3, 13281.0], [68.4, 13281.0], [68.5, 13281.0], [68.6, 13281.0], [68.7, 13398.0], [68.8, 13398.0], [68.9, 13398.0], [69.0, 13398.0], [69.1, 13398.0], [69.2, 13398.0], [69.3, 13398.0], [69.4, 13398.0], [69.5, 13520.0], [69.6, 13520.0], [69.7, 13520.0], [69.8, 13520.0], [69.9, 13520.0], [70.0, 13520.0], [70.1, 13520.0], [70.2, 13644.0], [70.3, 13644.0], [70.4, 13644.0], [70.5, 13644.0], [70.6, 13644.0], [70.7, 13644.0], [70.8, 13644.0], [70.9, 13754.0], [71.0, 13754.0], [71.1, 13754.0], [71.2, 13754.0], [71.3, 13754.0], [71.4, 13754.0], [71.5, 13754.0], [71.6, 13754.0], [71.7, 13888.0], [71.8, 13888.0], [71.9, 13888.0], [72.0, 13888.0], [72.1, 13888.0], [72.2, 13888.0], [72.3, 13888.0], [72.4, 14097.0], [72.5, 14097.0], [72.6, 14097.0], [72.7, 14097.0], [72.8, 14097.0], [72.9, 14097.0], [73.0, 14097.0], [73.1, 14097.0], [73.2, 14272.0], [73.3, 14272.0], [73.4, 14272.0], [73.5, 14272.0], [73.6, 14272.0], [73.7, 14272.0], [73.8, 14272.0], [73.9, 14446.0], [74.0, 14446.0], [74.1, 14446.0], [74.2, 14446.0], [74.3, 14446.0], [74.4, 14446.0], [74.5, 14446.0], [74.6, 14446.0], [74.7, 14582.0], [74.8, 14582.0], [74.9, 14582.0], [75.0, 14582.0], [75.1, 14582.0], [75.2, 14582.0], [75.3, 14582.0], [75.4, 14721.0], [75.5, 14721.0], [75.6, 14721.0], [75.7, 14721.0], [75.8, 14721.0], [75.9, 14721.0], [76.0, 14721.0], [76.1, 14721.0], [76.2, 14855.0], [76.3, 14855.0], [76.4, 14855.0], [76.5, 14855.0], [76.6, 14855.0], [76.7, 14855.0], [76.8, 14855.0], [76.9, 15275.0], [77.0, 15275.0], [77.1, 15275.0], [77.2, 15275.0], [77.3, 15275.0], [77.4, 15275.0], [77.5, 15275.0], [77.6, 15275.0], [77.7, 15288.0], [77.8, 15288.0], [77.9, 15288.0], [78.0, 15288.0], [78.1, 15288.0], [78.2, 15288.0], [78.3, 15288.0], [78.4, 15700.0], [78.5, 15700.0], [78.6, 15700.0], [78.7, 15700.0], [78.8, 15700.0], [78.9, 15700.0], [79.0, 15700.0], [79.1, 15700.0], [79.2, 15705.0], [79.3, 15705.0], [79.4, 15705.0], [79.5, 15705.0], [79.6, 15705.0], [79.7, 15705.0], [79.8, 15705.0], [79.9, 16103.0], [80.0, 16103.0], [80.1, 16103.0], [80.2, 16103.0], [80.3, 16103.0], [80.4, 16103.0], [80.5, 16103.0], [80.6, 16109.0], [80.7, 16109.0], [80.8, 16109.0], [80.9, 16109.0], [81.0, 16109.0], [81.1, 16109.0], [81.2, 16109.0], [81.3, 16109.0], [81.4, 16294.0], [81.5, 16294.0], [81.6, 16294.0], [81.7, 16294.0], [81.8, 16294.0], [81.9, 16294.0], [82.0, 16294.0], [82.1, 16451.0], [82.2, 16451.0], [82.3, 16451.0], [82.4, 16451.0], [82.5, 16451.0], [82.6, 16451.0], [82.7, 16451.0], [82.8, 16451.0], [82.9, 16573.0], [83.0, 16573.0], [83.1, 16573.0], [83.2, 16573.0], [83.3, 16573.0], [83.4, 16573.0], [83.5, 16573.0], [83.6, 16712.0], [83.7, 16712.0], [83.8, 16712.0], [83.9, 16712.0], [84.0, 16712.0], [84.1, 16712.0], [84.2, 16712.0], [84.3, 16712.0], [84.4, 16845.0], [84.5, 16845.0], [84.6, 16845.0], [84.7, 16845.0], [84.8, 16845.0], [84.9, 16845.0], [85.0, 16845.0], [85.1, 16971.0], [85.2, 16971.0], [85.3, 16971.0], [85.4, 16971.0], [85.5, 16971.0], [85.6, 16971.0], [85.7, 16971.0], [85.8, 16971.0], [85.9, 17077.0], [86.0, 17077.0], [86.1, 17077.0], [86.2, 17077.0], [86.3, 17077.0], [86.4, 17077.0], [86.5, 17077.0], [86.6, 17211.0], [86.7, 17211.0], [86.8, 17211.0], [86.9, 17211.0], [87.0, 17211.0], [87.1, 17211.0], [87.2, 17211.0], [87.3, 17211.0], [87.4, 17319.0], [87.5, 17319.0], [87.6, 17319.0], [87.7, 17319.0], [87.8, 17319.0], [87.9, 17319.0], [88.0, 17319.0], [88.1, 17445.0], [88.2, 17445.0], [88.3, 17445.0], [88.4, 17445.0], [88.5, 17445.0], [88.6, 17445.0], [88.7, 17445.0], [88.8, 17445.0], [88.9, 17556.0], [89.0, 17556.0], [89.1, 17556.0], [89.2, 17556.0], [89.3, 17556.0], [89.4, 17556.0], [89.5, 17556.0], [89.6, 17689.0], [89.7, 17689.0], [89.8, 17689.0], [89.9, 17689.0], [90.0, 17689.0], [90.1, 17689.0], [90.2, 17689.0], [90.3, 17801.0], [90.4, 17801.0], [90.5, 17801.0], [90.6, 17801.0], [90.7, 17801.0], [90.8, 17801.0], [90.9, 17801.0], [91.0, 17801.0], [91.1, 17935.0], [91.2, 17935.0], [91.3, 17935.0], [91.4, 17935.0], [91.5, 17935.0], [91.6, 17935.0], [91.7, 17935.0], [91.8, 18053.0], [91.9, 18053.0], [92.0, 18053.0], [92.1, 18053.0], [92.2, 18053.0], [92.3, 18053.0], [92.4, 18053.0], [92.5, 18053.0], [92.6, 18175.0], [92.7, 18175.0], [92.8, 18175.0], [92.9, 18175.0], [93.0, 18175.0], [93.1, 18175.0], [93.2, 18175.0], [93.3, 18294.0], [93.4, 18294.0], [93.5, 18294.0], [93.6, 18294.0], [93.7, 18294.0], [93.8, 18294.0], [93.9, 18294.0], [94.0, 18294.0], [94.1, 18421.0], [94.2, 18421.0], [94.3, 18421.0], [94.4, 18421.0], [94.5, 18421.0], [94.6, 18421.0], [94.7, 18421.0], [94.8, 18531.0], [94.9, 18531.0], [95.0, 18531.0], [95.1, 18531.0], [95.2, 18531.0], [95.3, 18531.0], [95.4, 18531.0], [95.5, 18531.0], [95.6, 18655.0], [95.7, 18655.0], [95.8, 18655.0], [95.9, 18655.0], [96.0, 18655.0], [96.1, 18655.0], [96.2, 18655.0], [96.3, 18790.0], [96.4, 18790.0], [96.5, 18790.0], [96.6, 18790.0], [96.7, 18790.0], [96.8, 18790.0], [96.9, 18790.0], [97.0, 18790.0], [97.1, 18898.0], [97.2, 18898.0], [97.3, 18898.0], [97.4, 18898.0], [97.5, 18898.0], [97.6, 18898.0], [97.7, 18898.0], [97.8, 19016.0], [97.9, 19016.0], [98.0, 19016.0], [98.1, 19016.0], [98.2, 19016.0], [98.3, 19016.0], [98.4, 19016.0], [98.5, 19016.0], [98.6, 19133.0], [98.7, 19133.0], [98.8, 19133.0], [98.9, 19133.0], [99.0, 19133.0], [99.1, 19133.0], [99.2, 19133.0], [99.3, 19155.0], [99.4, 19155.0], [99.5, 19155.0], [99.6, 19155.0], [99.7, 19155.0], [99.8, 19155.0], [99.9, 19155.0], [100.0, 19155.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 2100.0, "maxY": 16.0, "series": [{"data": [[2100.0, 2.0], [2200.0, 6.0], [4200.0, 2.0], [4700.0, 16.0], [4800.0, 1.0], [4900.0, 1.0], [5100.0, 1.0], [5300.0, 2.0], [5500.0, 2.0], [5600.0, 1.0], [5700.0, 1.0], [5800.0, 1.0], [6000.0, 1.0], [6100.0, 1.0], [6200.0, 1.0], [6400.0, 1.0], [6500.0, 1.0], [6700.0, 1.0], [6900.0, 1.0], [7100.0, 1.0], [7200.0, 1.0], [7300.0, 1.0], [7500.0, 1.0], [7800.0, 2.0], [8000.0, 1.0], [8200.0, 1.0], [8300.0, 1.0], [8400.0, 1.0], [8500.0, 1.0], [8600.0, 1.0], [8800.0, 1.0], [8900.0, 1.0], [9000.0, 1.0], [9100.0, 1.0], [9200.0, 1.0], [9300.0, 1.0], [9500.0, 1.0], [9600.0, 1.0], [9700.0, 1.0], [9800.0, 1.0], [9900.0, 1.0], [10100.0, 1.0], [10200.0, 1.0], [10300.0, 1.0], [10400.0, 1.0], [10500.0, 1.0], [10600.0, 1.0], [10800.0, 1.0], [10900.0, 1.0], [11000.0, 1.0], [11100.0, 1.0], [11200.0, 1.0], [11400.0, 1.0], [11500.0, 1.0], [11600.0, 1.0], [11700.0, 1.0], [11800.0, 1.0], [11900.0, 1.0], [12100.0, 1.0], [12300.0, 1.0], [12400.0, 1.0], [12600.0, 1.0], [12700.0, 1.0], [12900.0, 1.0], [13000.0, 1.0], [13100.0, 1.0], [13200.0, 1.0], [13300.0, 1.0], [13500.0, 1.0], [13600.0, 1.0], [13700.0, 1.0], [13800.0, 1.0], [14000.0, 1.0], [14200.0, 1.0], [14400.0, 1.0], [14500.0, 1.0], [14700.0, 1.0], [14800.0, 1.0], [15200.0, 2.0], [15700.0, 2.0], [16100.0, 2.0], [16200.0, 1.0], [17200.0, 1.0], [16400.0, 1.0], [16500.0, 1.0], [16700.0, 1.0], [16800.0, 1.0], [16900.0, 1.0], [17000.0, 1.0], [17300.0, 1.0], [17400.0, 1.0], [17500.0, 1.0], [17600.0, 1.0], [17800.0, 1.0], [17900.0, 1.0], [18000.0, 1.0], [18100.0, 1.0], [18200.0, 1.0], [18400.0, 1.0], [18500.0, 1.0], [18600.0, 1.0], [18700.0, 1.0], [18800.0, 1.0], [19000.0, 1.0], [19100.0, 2.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 19100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 134.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 134.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 134.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 67.64179104477611, "minX": 1.79354208E12, "maxY": 67.64179104477611, "series": [{"data": [[1.79354208E12, 67.64179104477611]], "isOverall": false, "label": "Thread Group 8 ( 134 Users )", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79354208E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 2165.3333333333335, "minX": 1.0, "maxY": 19155.0, "series": [{"data": [[2.0, 19133.0], [3.0, 19016.0], [4.0, 18898.0], [5.0, 18790.0], [6.0, 18655.0], [7.0, 18531.0], [8.0, 18421.0], [9.0, 18294.0], [10.0, 18175.0], [11.0, 18053.0], [12.0, 17935.0], [13.0, 17801.0], [14.0, 17689.0], [15.0, 17556.0], [16.0, 17445.0], [17.0, 17319.0], [18.0, 17211.0], [19.0, 17077.0], [20.0, 16971.0], [21.0, 16845.0], [22.0, 16712.0], [23.0, 16573.0], [24.0, 16451.0], [25.0, 16294.0], [27.0, 16106.0], [28.0, 15705.0], [29.0, 15700.0], [30.0, 15288.0], [31.0, 15275.0], [33.0, 14721.0], [32.0, 14855.0], [35.0, 14446.0], [34.0, 14582.0], [37.0, 14097.0], [36.0, 14272.0], [39.0, 13754.0], [38.0, 13888.0], [41.0, 13520.0], [40.0, 13644.0], [43.0, 13281.0], [42.0, 13398.0], [45.0, 13033.0], [44.0, 13160.0], [47.0, 12794.0], [46.0, 12913.0], [49.0, 12497.0], [48.0, 12649.0], [51.0, 12127.0], [50.0, 12316.0], [53.0, 11872.0], [52.0, 11993.0], [55.0, 11648.0], [54.0, 11757.0], [57.0, 11411.0], [56.0, 11518.0], [59.0, 11165.0], [58.0, 11290.0], [61.0, 10929.0], [60.0, 11048.0], [63.0, 10691.0], [62.0, 10821.0], [67.0, 10215.0], [66.0, 10336.0], [65.0, 10456.0], [64.0, 10580.0], [71.0, 9739.0], [70.0, 9862.0], [69.0, 9974.0], [68.0, 10106.0], [75.0, 9274.0], [74.0, 9390.0], [73.0, 9506.0], [72.0, 9621.0], [79.0, 8807.0], [78.0, 8921.0], [77.0, 9030.0], [76.0, 9161.0], [83.0, 8336.0], [82.0, 8458.0], [81.0, 8571.0], [80.0, 8687.0], [87.0, 7896.0], [86.0, 7897.0], [85.0, 8042.0], [84.0, 8219.0], [91.0, 7109.0], [90.0, 7241.0], [89.0, 7361.0], [88.0, 7502.0], [95.0, 6415.0], [94.0, 6596.0], [93.0, 6730.0], [92.0, 6903.0], [99.0, 5872.0], [98.0, 6013.0], [97.0, 6145.0], [96.0, 6275.0], [103.0, 5511.5], [101.0, 5635.0], [100.0, 5748.0], [107.0, 4903.0], [106.0, 5124.0], [105.0, 5371.0], [104.0, 5380.0], [111.0, 4779.0], [109.0, 4782.0], [108.0, 4806.0], [115.0, 4774.5], [119.0, 4771.0], [118.0, 4767.5], [117.0, 4770.0], [116.0, 4776.5], [122.0, 4764.0], [121.0, 4761.0], [127.0, 2269.0], [126.0, 4211.0], [125.0, 4214.0], [124.0, 4761.5], [134.0, 2165.3333333333335], [131.0, 2250.0], [130.0, 2266.0], [129.0, 2261.0], [128.0, 2272.0], [1.0, 19155.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[67.64179104477611, 10425.932835820895]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 134.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 607.4666666666667, "minX": 1.79354208E12, "maxY": 1248.4333333333334, "series": [{"data": [[1.79354208E12, 1248.4333333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.79354208E12, 607.4666666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79354208E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 10425.932835820895, "minX": 1.79354208E12, "maxY": 10425.932835820895, "series": [{"data": [[1.79354208E12, 10425.932835820895]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79354208E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 10424.880597014926, "minX": 1.79354208E12, "maxY": 10424.880597014926, "series": [{"data": [[1.79354208E12, 10424.880597014926]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79354208E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 95.23134328358208, "minX": 1.79354208E12, "maxY": 95.23134328358208, "series": [{"data": [[1.79354208E12, 95.23134328358208]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79354208E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 2140.0, "minX": 1.79354208E12, "maxY": 19155.0, "series": [{"data": [[1.79354208E12, 19155.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.79354208E12, 17745.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.79354208E12, 19147.3]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.79354208E12, 18562.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.79354208E12, 2140.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.79354208E12, 10160.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79354208E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 4212.5, "minX": 2.0, "maxY": 15494.0, "series": [{"data": [[8.0, 11416.5], [2.0, 4212.5], [9.0, 9923.0], [5.0, 15494.0], [21.0, 4774.0], [6.0, 7431.5], [7.0, 13888.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 21.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 4212.0, "minX": 2.0, "maxY": 15494.0, "series": [{"data": [[8.0, 11416.5], [2.0, 4212.0], [9.0, 9923.0], [5.0, 15494.0], [21.0, 4774.0], [6.0, 7431.0], [7.0, 13888.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 21.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 2.2333333333333334, "minX": 1.79354208E12, "maxY": 2.2333333333333334, "series": [{"data": [[1.79354208E12, 2.2333333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79354208E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 2.2333333333333334, "minX": 1.79354208E12, "maxY": 2.2333333333333334, "series": [{"data": [[1.79354208E12, 2.2333333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79354208E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 2.2333333333333334, "minX": 1.79354208E12, "maxY": 2.2333333333333334, "series": [{"data": [[1.79354208E12, 2.2333333333333334]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79354208E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 2.2333333333333334, "minX": 1.79354208E12, "maxY": 2.2333333333333334, "series": [{"data": [[1.79354208E12, 2.2333333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79354208E12, "title": "Total Transactions Per Second"}},
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

