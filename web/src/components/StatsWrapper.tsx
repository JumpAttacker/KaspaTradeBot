import React, {useState} from 'react';
// @ts-ignore
import Background from "../assets/stats_background.png?react";
import {cn} from "@/lib/utils.ts";

interface StatsProps {
    dailyDeals: number;
    dailyProfit: number;
    totalProfit: number;
    dailyCancelledOrders: number;
    totalCancelledOrders: number;
    dailyProfitMoreThen: number;
    dailyProfitMorePercent: number;
    dailyTradesMoreThen: number;
    dailyTradesMorePercent: number;
    lang: 'ru' | 'en'
}

const text0_ru = 'Статистика Торгов';
const text1_ru = 'Количество сделок за день';
const text2_ru = 'Прибыль за день';
const text4_ru = 'Прибыль за все время';
const text6_ru = 'Отмененные ордера за день';
const text7_ru = 'Отмененные ордера за все время';
const text8_ru = 'Среднее значение за месяц';
const text9_ru = 'Сделок за день';
const text10_ru = 'Прибыль за день';

const text0_en = 'Trading statistics';
const text1_en = 'Number of Trades';
const text2_en = 'Daily profit';
const text4_en = 'All time profit';
const text6_en = 'Cancelled Orders';
const text7_en = 'Cancelled Orders for all time';
const text8_en = 'Monthly average';
const text9_en = 'Daily Trades';
const text10_en = 'Daily profit';

const AverageBlock = ({title, current, moreThen, maxPercent, lang, symbol}: { title: string, current: string, moreThen: string, maxPercent: number, lang: 'ru' | 'en', symbol: '>' | '<' }) => {
    return <div className={'flex flex-row rounded-xl w-[306px] bg-[#292929] pl-5 h-[89px] overflow-hidden'}>
        <div className={'grow py-3'}>
            <div className={'text-[#13FFD7] font-medium highlight'}>{title}</div>
            <div className="flex flex-row items-center gap-4">
                <div className={'font-semibold text-[32px]'}>{current}</div>
                <div className={'font-medium opacity-50 flex flex-row items-center gap-1'}>
                    <span className={'text-[32px] pb-[3px]'}>{symbol}</span>
                    <span>{`${lang === 'ru' ? 'на' : 'than'} ${moreThen}`}</span>
                </div>
            </div>
        </div>
        <div className='bg-[#1C4B43] flex flex-col items-center justify-center px-1 w-[47px] relative percent-block'>
            <div className={`bg-[#13FFD7] absolute left-0 bottom-0 w-full z-0`} style={{
                height: `${Math.min(100, maxPercent)}%`
            }}/>
            <span className={'text-white font-semibold relative'}>{maxPercent >= 1000 ? (maxPercent / 1000).toFixed(1) + 'k' : maxPercent.toFixed(0)}%</span>
            <span className={'text-white font-semibold relative'}>max</span>
        </div>
    </div>
}

const StatsRow = ({tile, value}: { tile: string, value: string }) => {
    return (
        <div className={'mb-[7px] flex flex-row '}>
            <div className={'w-[300px] font-medium leading-7'}>{tile}:</div>
            <div className={'text-[#13FFD7] bg-[#2E2E2E] rounded-md px-2 py-1 font-semibold'}>{value}</div>
        </div>
    )
}

const StatsWrapper: React.FC<StatsProps> = ({
                                                dailyDeals,
                                                dailyProfit,
                                                totalProfit,
                                                dailyCancelledOrders,
                                                totalCancelledOrders,
                                                dailyProfitMoreThen,
                                                dailyProfitMorePercent,
                                                dailyTradesMorePercent,
                                                dailyTradesMoreThen,
                                                lang
                                            }) => {
    const [isLoadedFully, setFullyLoaded] = useState(false);
    const imageCls = cn('w-full h-full absolute top-0 left-0 z-0', {
        'image-loaded-fully': isLoadedFully
    })
    return (
        <div className="p-11 bg-white shadow-md rounded-lg max-w-[1007px] stats-wrapper relative text-white">
            <img src={Background} alt="stats background" className={imageCls} onLoad={() => setFullyLoaded(true)}/>
            <div className={'z-10 w-full h-full relative shadow-custom px-[54px] py-[40px] content-box flex flex-row justify-between max-w-[917px]'}>
                {/*<Background2 className={'w-full h-full absolute top-0 left-0'}/>*/}
                <div className={'flex flex-col grow'}>
                    <div className="content-box__title mb-[39px]">{lang === 'ru' ? text0_ru : text0_en}</div>
                    <div>
                        <StatsRow tile={lang === 'ru' ? text2_ru : text2_en} value={`${dailyProfit.toFixed(2)} USDT`}/>
                        <StatsRow tile={lang === 'ru' ? text4_ru : text4_en} value={`${totalProfit.toFixed(2)} USDT`}/>
                        <StatsRow tile={lang === 'ru' ? text1_ru : text1_en} value={`${dailyDeals.toFixed(0)}`}/>
                        <StatsRow tile={lang === 'ru' ? text6_ru : text6_en} value={`${dailyCancelledOrders.toFixed(0)}`}/>
                        <StatsRow tile={lang === 'ru' ? text7_ru : text7_en} value={`${totalCancelledOrders.toFixed(0)}`}/>
                    </div>
                </div>
                <div className={'flex flex-col basis-[337px] shrink-0'}>
                    <div className="content-box__title mb-[39px]">{lang === 'ru' ? text8_ru : text8_en}</div>
                    <div className={'flex flex-col gap-3'}>
                        <AverageBlock lang={lang} title={lang === 'ru' ? text9_ru : text9_en} current={`${dailyDeals.toFixed(0)}`} moreThen={Math.abs(dailyTradesMoreThen).toFixed(0)}
                                      maxPercent={dailyTradesMorePercent} symbol={dailyTradesMoreThen > 0 ? '>' : '<'}/>
                        <AverageBlock lang={lang} title={lang === 'ru' ? text10_ru : text10_en} current={`${dailyProfit.toFixed(2)}`} moreThen={Math.abs(dailyProfitMoreThen).toFixed(2)}
                                      maxPercent={dailyProfitMorePercent} symbol={dailyProfitMoreThen > 0 ? '>' : '<'}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StatsWrapper;
