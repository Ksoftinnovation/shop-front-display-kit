
import React, { useState, useEffect } from 'react';
import { format } from "date-fns";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

// Define the data structure based on provided sample
export interface HistoryEntry {
  _id: {
    $oid: string;
  };
  employeeId: {
    $oid: string;
  };
  projectId: {
    $oid: string;
  };
  date: {
    $date: {
      $numberLong: string;
    };
  };
  startTime: {
    $date: {
      $numberLong: string;
    };
  };
  startLocation: {
    latitude: {
      $numberDouble: string;
    };
    longitude: {
      $numberDouble: string;
    };
  };
  endLocation?: {
    latitude: {
      $numberDouble: string;
    };
    longitude: {
      $numberDouble: string;
    };
  };
  notes: string;
  shiftHours: string;
  breaks: {
    startTime: {
      $date: {
        $numberLong: string;
      };
    };
    type: string;
    _id: {
      $oid: string;
    };
    endTime: {
      $date: {
        $numberLong: string;
      };
    };
  }[];
  createdAt: {
    $date: {
      $numberLong: string;
    };
  };
  updatedAt: {
    $date: {
      $numberLong: string;
    };
  };
  __v: {
    $numberInt: string;
  };
  endTime?: {
    $date: {
      $numberLong: string;
    };
  };
}

// Mock data based on the provided example
const mockData: HistoryEntry[] = [
  {
    "_id": {
      "$oid": "681d93b390a92357464b9591"
    },
    "employeeId": {
      "$oid": "6819c852705dbb0719a434a2"
    },
    "projectId": {
      "$oid": "681b5b0cf80d26af0b6d8fb0"
    },
    "date": {
      "$date": {
        "$numberLong": "1746748800000"
      }
    },
    "startTime": {
      "$date": {
        "$numberLong": "1746758754546"
      }
    },
    "startLocation": {
      "latitude": {
        "$numberDouble": "6.8288512"
      },
      "longitude": {
        "$numberDouble": "79.9932416"
      }
    },
    "notes": "UI Web development",
    "shiftHours": "01:51:35",
    "breaks": [
      {
        "startTime": {
          "$date": {
            "$numberLong": "1746760810595"
          }
        },
        "type": "tea break",
        "_id": {
          "$oid": "681d7476704705f0a0fae75b"
        },
        "endTime": {
          "$date": {
            "$numberLong": "1746765156818"
          }
        }
      },
      {
        "startTime": {
          "$date": {
            "$numberLong": "1746765183116"
          }
        },
        "type": "lunch break",
        "_id": {
          "$oid": "681d857fc388a5728b31e3f5"
        },
        "endTime": {
          "$date": {
            "$numberLong": "1746765187091"
          }
        }
      },
      {
        "startTime": {
          "$date": {
            "$numberLong": "1746765394427"
          }
        },
        "type": "tea break",
        "_id": {
          "$oid": "681d8652c388a5728b31e402"
        },
        "endTime": {
          "$date": {
            "$numberLong": "1746765404999"
          }
        }
      }
    ],
    "createdAt": {
      "$date": {
        "$numberLong": "1746758754566"
      }
    },
    "updatedAt": {
      "$date": {
        "$numberLong": "1746765449885"
      }
    },
    "__v": {
      "$numberInt": "3"
    },
    "endLocation": {
      "latitude": {
        "$numberDouble": "6.8288512"
      },
      "longitude": {
        "$numberDouble": "79.9932416"
      }
    },
    "endTime": {
      "$date": {
        "$numberLong": "1746765449725"
      }
    }
  },
  // Add more mock data with different dates to show filtering
  {
    "_id": {"$oid": "681d93b390a92357464b9592"},
    "employeeId": {"$oid": "6819c852705dbb0719a434a2"},
    "projectId": {"$oid": "681b5b0cf80d26af0b6d8fb0"},
    "date": {"$date": {"$numberLong": "1746662400000"}}, // Yesterday
    "startTime": {"$date": {"$numberLong": "1746672400000"}},
    "startLocation": {"latitude": {"$numberDouble": "6.8288512"}, "longitude": {"$numberDouble": "79.9932416"}},
    "notes": "API Integration",
    "shiftHours": "02:30:15",
    "breaks": [
      {"startTime": {"$date": {"$numberLong": "1746680000000"}}, "type": "lunch break", "_id": {"$oid": "681d857fc388a5728b31e3f6"}, "endTime": {"$date": {"$numberLong": "1746683600000"}}}
    ],
    "createdAt": {"$date": {"$numberLong": "1746672400000"}},
    "updatedAt": {"$date": {"$numberLong": "1746683600000"}},
    "__v": {"$numberInt": "1"},
    "endLocation": {"latitude": {"$numberDouble": "6.8288512"}, "longitude": {"$numberDouble": "79.9932416"}},
    "endTime": {"$date": {"$numberLong": "1746683600000"}}
  },
  {
    "_id": {"$oid": "681d93b390a92357464b9593"},
    "employeeId": {"$oid": "6819c852705dbb0719a434a2"},
    "projectId": {"$oid": "681b5b0cf80d26af0b6d8fb0"},
    "date": {"$date": {"$numberLong": "1746316800000"}}, // Last week
    "startTime": {"$date": {"$numberLong": "1746326800000"}},
    "startLocation": {"latitude": {"$numberDouble": "6.8288512"}, "longitude": {"$numberDouble": "79.9932416"}},
    "notes": "Database Design",
    "shiftHours": "04:15:20",
    "breaks": [
      {"startTime": {"$date": {"$numberLong": "1746334000000"}}, "type": "tea break", "_id": {"$oid": "681d857fc388a5728b31e3f7"}, "endTime": {"$date": {"$numberLong": "1746335800000"}}},
      {"startTime": {"$date": {"$numberLong": "1746340200000"}}, "type": "lunch break", "_id": {"$oid": "681d857fc388a5728b31e3f8"}, "endTime": {"$date": {"$numberLong": "1746343800000"}}}
    ],
    "createdAt": {"$date": {"$numberLong": "1746326800000"}},
    "updatedAt": {"$date": {"$numberLong": "1746343800000"}},
    "__v": {"$numberInt": "2"},
    "endLocation": {"latitude": {"$numberDouble": "6.8288512"}, "longitude": {"$numberDouble": "79.9932416"}},
    "endTime": {"$date": {"$numberLong": "1746343800000"}}
  }
];

interface HistoryDataTableProps {
  timeFilter: 'today' | 'yesterday' | 'week' | 'month' | 'all';
}

const HistoryDataTable: React.FC<HistoryDataTableProps> = ({ timeFilter }) => {
  const [filteredData, setFilteredData] = useState<HistoryEntry[]>(mockData);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 10;

  // Filter data based on timeFilter
  useEffect(() => {
    let filtered = [...mockData];
    
    if (searchTerm) {
      filtered = filtered.filter(entry => 
        entry.notes.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (timeFilter !== 'all') {
      const now = new Date();
      const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      const yesterday = new Date(today);
      yesterday.setDate(yesterday.getDate() - 1);
      const weekStart = new Date(today);
      weekStart.setDate(today.getDate() - today.getDay());
      const monthStart = new Date(today.getFullYear(), today.getMonth(), 1);
      
      filtered = filtered.filter(entry => {
        const entryDate = new Date(parseInt(entry.date.$date.$numberLong));
        
        switch (timeFilter) {
          case 'today':
            return entryDate.getTime() >= today.getTime() && 
                   entryDate.getTime() < today.getTime() + 86400000;
          case 'yesterday':
            return entryDate.getTime() >= yesterday.getTime() && 
                   entryDate.getTime() < yesterday.getTime() + 86400000;
          case 'week':
            return entryDate.getTime() >= weekStart.getTime();
          case 'month':
            return entryDate.getTime() >= monthStart.getTime();
          default:
            return true;
        }
      });
    }
    
    setFilteredData(filtered);
    setCurrentPage(1);  // Reset to first page when filter changes
  }, [timeFilter, searchTerm]);

  // Format date from timestamp
  const formatDate = (timestamp: string): string => {
    return format(new Date(parseInt(timestamp)), 'MMM dd, yyyy');
  };

  // Format time from timestamp
  const formatTime = (timestamp: string): string => {
    return format(new Date(parseInt(timestamp)), 'hh:mm a');
  };

  // Calculate pagination
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage, 
    currentPage * itemsPerPage
  );

  return (
    <div>
      <div className="flex items-center mb-4 relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
        <Input
          placeholder="Search by notes..."
          className="pl-10"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      
      <div className="rounded-md border">
        <Table>
          <TableCaption>History of activities and time tracking</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Start Time</TableHead>
              <TableHead>End Time</TableHead>
              <TableHead>Duration</TableHead>
              <TableHead>Notes</TableHead>
              <TableHead>Breaks</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedData.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center">No records found</TableCell>
              </TableRow>
            ) : (
              paginatedData.map((entry) => (
                <TableRow key={entry._id.$oid}>
                  <TableCell>{formatDate(entry.date.$date.$numberLong)}</TableCell>
                  <TableCell>{formatTime(entry.startTime.$date.$numberLong)}</TableCell>
                  <TableCell>{entry.endTime ? formatTime(entry.endTime.$date.$numberLong) : 'N/A'}</TableCell>
                  <TableCell>{entry.shiftHours}</TableCell>
                  <TableCell className="max-w-xs truncate">{entry.notes}</TableCell>
                  <TableCell>{entry.breaks.length} break{entry.breaks.length !== 1 ? 's' : ''}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <Pagination className="mt-4">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious 
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
              />
            </PaginationItem>
            
            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
              // Show first page, last page, current page and pages around current
              let pageNum = i + 1;
              if (totalPages > 5) {
                if (currentPage > 3 && currentPage < totalPages - 2) {
                  pageNum = [1, currentPage - 1, currentPage, currentPage + 1, totalPages][i];
                } else if (currentPage >= totalPages - 2) {
                  pageNum = [1, totalPages - 3, totalPages - 2, totalPages - 1, totalPages][i];
                }
              }
              
              return (
                <PaginationItem key={pageNum}>
                  <PaginationLink 
                    isActive={pageNum === currentPage}
                    onClick={() => setCurrentPage(pageNum)}
                  >
                    {pageNum}
                  </PaginationLink>
                </PaginationItem>
              );
            })}
            
            <PaginationItem>
              <PaginationNext 
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
};

export default HistoryDataTable;
