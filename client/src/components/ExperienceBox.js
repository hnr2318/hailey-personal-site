import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import WhiteTypography from './WhiteTypography';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';

export default function ExperienceBox() {
    return (
        <>
            <WhiteTypography gutterBottom variant="h4" component="div" style={{ marginBottom: "3rem" }}>
                My Experience
            </WhiteTypography>
            <Timeline position="alternate">
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot color="secondary">
                            <Tooltip title=" August 2018 - December 2022 (4.5 years)" placement="left">
                                <IconButton>
                                    <LaptopMacIcon />
                                </IconButton>
                            </Tooltip>
                        </TimelineDot>
                        <TimelineConnector sx={{ height: "6rem" }}/>
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <WhiteTypography variant="h6" component="span">
                            Computer Science Degree
                        </WhiteTypography>
                        <WhiteTypography>University of Georgia</WhiteTypography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot>
                            <Tooltip title="May 2021 - January 2023 (1.5 years)" placement="right">
                                <IconButton>
                                    <LaptopMacIcon />
                                </IconButton>
                            </Tooltip>
                        </TimelineDot>
                        <TimelineConnector sx={{ height: "4rem" }}/>
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <WhiteTypography variant="h6" component="span">
                            Programming Instructor
                        </WhiteTypography>
                        <WhiteTypography>Codakid</WhiteTypography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineConnector/>
                        <TimelineDot color="primary">
                            <Tooltip title="June 2021 - October 2022 (2 years)" placement="left">
                                <IconButton>
                                    <LaptopMacIcon />
                                </IconButton>
                            </Tooltip>
                        </TimelineDot>
                        <TimelineConnector sx={{ height: "4rem" }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <WhiteTypography variant="h6" component="span">
                            Software Developer
                        </WhiteTypography>
                        <WhiteTypography>UGA Social Work Department</WhiteTypography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot>
                            <Tooltip title="January 2023 - Current (6 months)" placement="right">
                                <IconButton>
                                    <LaptopMacIcon />
                                </IconButton>
                            </Tooltip>
                        </TimelineDot>
                        <TimelineConnector sx={{ height: "2rem" }}/>
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <WhiteTypography variant="h6" component="span">
                            Software Developer
                        </WhiteTypography>
                        <WhiteTypography>Murzan Inc.</WhiteTypography>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </>
    );
}
