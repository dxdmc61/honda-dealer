package com.honda.aem.core.models;

import com.adobe.cq.export.json.ComponentExporter;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
 
@Model(adaptables = Resource.class,
       adapters = { HondaNavigationModel.class, ComponentExporter.class },
       resourceType = "honda/components/hondanavigation",
       defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class HondaNavigationModel implements ComponentExporter {
 
    @Override
    public String getExportedType() {
        return "honda/components/hondanavigation";
    }
}