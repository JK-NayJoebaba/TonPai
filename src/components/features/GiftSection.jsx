import React, { memo } from "react";
import { _LoveAlbums } from "../../assets/mock/mock";

const GiftSection = memo(({ data }) => {
    return (
        <div className="relative">
            <div className="flex flex-col gap-4">
                <div className="p-2 !bg-[#fbfbfb74] rounded-lg shadow-sm ">
                    {Array.isArray(data)
                        ? data.map((message, index) => (
                              <div
                                  className="text-lg p-2 text-start"
                                  key={index}
                              >
                                  {message}
                              </div>
                          ))
                        : null}
                </div>
                <div className="p-4 py-8 flex flex-col text-center gap-4 rounded-lg items-center">
                    <p className="font-bold text-[#f78da4] text-xl">
                        I Miss You 💕
                    </p>

                    <div className="LoveTogeter">
                        <h1 className="TextHide">---------------------------------------------------------------------------------------</h1>

                        <div className="container">
                            <div className="wgh-slider">
                                <div className="wgh-slider__viewport">
                                    <div className="wgh-slider__viewbox">
                                        <div className="wgh-slider__container">
                                            {[
                                                { id: 'slide-1', img: _LoveAlbums[3] },
                                                { id: 'slide-2', img: _LoveAlbums[1] },
                                                { id: 'slide-3', img: _LoveAlbums[2] },
                                                { id: 'slide-4', img: _LoveAlbums[0] }
                                                ].map((item, index) => (
                                                <div className="wgh-slider-item" key={item.id}>
                                                    <div className="wgh-slider-item__inner">
                                                        <figure className="wgh-slider-item-figure">
                                                            <img className="wgh-slider-item-figure__image" src={item.img} alt={item.caption} />
                                                        </figure>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    

                    <div className={`pb-20 font-bold text-[#f78da4] text-3xl`}>
                         💕💕💕
                    </div>
                </div>
            </div>
        </div>
    );
});

export default GiftSection;
